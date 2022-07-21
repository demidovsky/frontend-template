import { Component, useState, useEffect } from "react";
import pubSub from "./PubSub";

export default function Clock() {
    const [clockStr, setClockStr] = useState<string>('...');
    let isSubscribed: boolean = true;

    function startTimer(): void {
        pubSub.subscribe((data: string) => {
            console.log(data)
            setClockStr(data);
        });
        isSubscribed = true;
    }

    function stopTimer(): void {
        pubSub.unsubscribeAll();
        isSubscribed = false;
    }

    useEffect(() => {
        console.log('mount', isSubscribed);
        startTimer();

        return function cleanup () {
            console.log('unmount', isSubscribed);
            stopTimer();
        }
    }, [isSubscribed]);

    return <div>{clockStr}</div>;
}