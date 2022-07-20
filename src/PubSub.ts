import moment from "moment-timezone";

type PubSubCallback<T> = (data: T) => void

class PubSub<T> {

    private readonly callbacks: Array<PubSubCallback<T>> = [];


    public subscribe(callback: PubSubCallback<T>): void {
        // uid
        // this.callbacks[uid] = callback
        // return uid

        this.callbacks.push(callback);
    }

    public unsubscribeAll(/* uid: string */) {
        this.callbacks.splice(0, this.callbacks.length);
    }

    public emit(data: T) {
        this.callbacks.forEach((callback: PubSubCallback<T>) => {
            callback(data);
        })
    }

}

const pubSub = new PubSub<string>;


setInterval(() => {
    const now = moment().tz('Europe/Moscow');
    pubSub.emit(now.format('HH:mm:ss'));
}, 1000);


export default pubSub;
