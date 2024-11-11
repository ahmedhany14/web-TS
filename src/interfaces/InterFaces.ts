import { AxiosPromise } from 'axios';

export interface userProps {
    id?: string,
    name?: string,
    age?: number
}
export interface attrs<T> {
    get(propName: keyof T): T[keyof T];
    set(update: T): void;
    getAll(): T;
}

export interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export interface Sync<T> {
    fetch(filter: string): AxiosPromise;
    save(data: T): AxiosPromise;
}

export interface hasIdentifier {
    id?: string;
}