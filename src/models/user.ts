import axios from 'axios';

interface userProps {
    id?: string,
    name?: string,
    age?: number
}

type Callback = () => void;
export class user {
    public events: { [key: string]: Callback[] } = {};

    constructor(private data: userProps) { }

    public get(propName: string): any {
        return this.data[propName as keyof userProps];
    }

    public set(update: userProps): void {
        console.log("update", update);
        this.data = { ...this.data, ...update };
    }

    public on(eventName: string, cb: Callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(cb);
    }

    public trigger(eventName: string): void {
        if (!this.events[eventName]) return;

        this.events[eventName].forEach(cb => {
            cb();
        });
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response) => {
                this.set(response.data);
            }).catch((err) => {
                console.log(err);
            });

    }

    save(): void {
        console.log("this.data.id", this.data.id);
        if (this.data.id) {
            // update
            axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data)
            return;
        }
        axios.post('http://localhost:3000/users', this.data)
    }
}