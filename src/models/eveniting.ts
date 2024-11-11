type Callback = () => void;

export class Eventing {
    public events: { [key: string]: Callback[] } = {};

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
}