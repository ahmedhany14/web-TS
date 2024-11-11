import { AxiosResponse } from 'axios';

import { attrs, Events, Sync, hasIdentifier } from '../interfaces/InterFaces';

export class Model<T extends hasIdentifier> {

    constructor(
        private attributes: attrs<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    public on = this.events.on;
    public trigger = this.events.trigger;
    get = this.attributes.get;

    set(update: T): void {
        this.attributes.set(update);
        this.trigger('change');
    }

    public fetch(): void {
        const identifier = this.get('id');
        if (!identifier) throw new Error('Cannot fetch without an id');
        this.sync.fetch(`${identifier}`).then((response: AxiosResponse): void => {
            this.set(response.data);
        }).catch((error: AxiosResponse): void => {
            this.trigger('error');
        })
    }
    public save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            }).catch((error: AxiosResponse): void => {
                this.trigger('error');
            });
    }

}