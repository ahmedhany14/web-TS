export class Attributes<T> {
    constructor(private data: T) { }

    public get(propName: keyof T): T[keyof T] {
        return this.data[propName];
    }

    public set(update: T): void {
        this.data = { ...this.data, ...update };
    }
}
