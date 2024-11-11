import axios, { AxiosPromise } from 'axios';

interface hasIdentifier {
    id?: string;
}

export class sync<T extends hasIdentifier> {

    private URL: string;
    constructor(URL: string) {
        this.URL = URL;
    }

    fetch(filter: string): AxiosPromise {
        return axios.get(`${this.URL}${filter}`)
    }

    save(data: T): AxiosPromise {
        const filter = data.id;
        if (filter) return axios.put(`${this.URL}${filter}`, data);;
        return axios.post(`${this.URL}`, data);
    }
}