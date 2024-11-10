interface userProps {
    name: string,
    age: number
}
export class user {

    constructor(private data: userProps) { }

    public get(propName: string): string | number {
        return this.data[propName as keyof userProps];
    }

    public set(update: userProps): void {
        this.data = { ...update };
    }

}