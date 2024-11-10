import axios from 'axios';

interface userProps {
    id?: string,
    name?: string,
    age?: number
}

export class user {

    constructor(private data: userProps) { }

    public get(propName: string): any {
        return this.data[propName as keyof userProps];
    }

    public set(update: userProps): void {
        this.data = { ...this.data, ...update };
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
        if (this.data.id) {
            // update
            axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data)
            return;
        }
        axios.post('http://localhost:3000/users', this.data)
    }
}