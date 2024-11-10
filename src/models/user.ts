import { Eventing } from './eveniting';
import { sync } from './Sync';
import { Attributes } from './attributes';
import { userProps } from '../interfaces/UserInterface';
export class user {
    private events: Eventing = new Eventing();
    private sync: sync<userProps> = new sync('http://localhost:3000/users/');
    private attributes: Attributes<userProps>;

    constructor(private data: userProps) {
        this.attributes = new Attributes<userProps>(data);
    }

    public on = this.events.on;
    public trigger = this.events.trigger;
    public fetch = this.sync.fetch;
    public save = this.sync.save;
    public get get() {
        return this.attributes.get;
    }
}