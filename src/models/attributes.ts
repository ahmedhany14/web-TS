export class Attributes<T> {
    constructor(private data: T) { }

    get = (propName: keyof T): T[keyof T] => {
        return this.data[propName];
    }

    public set(update: T): void {
        this.data = { ...this.data, ...update };
    }

    public getAll(): T {
        return this.data;
    }
}
