import { AxiosResponse, AxiosPromise } from 'axios';

interface attrs<T> {
    get(propName: keyof T): T[keyof T];
    set(update: T): void;
    getAll(): T;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}
interface Sync<T> {
    fetch(filter: string): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface hasIdentifier {
    id?: string;
}

export class Model<T extends hasIdentifier> {

    constructor(
        private attributes: attrs<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    public on = this.events.on;
    public trigger = this.events.trigger;
    get get() {
        return this.attributes.get;
    }
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