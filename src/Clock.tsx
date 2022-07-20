import { Component } from "react";
import moment from "moment-timezone";
import pubSub from "./PubSub";

type ClockState = {
    clockStr: string
};

export default class Clock extends Component<{}, ClockState> {

    private timer: number = 0;

    public constructor() {
        super({});
        this.state = {
            clockStr: ''
        };
    }

    private startTimer(): void {
        pubSub.subscribe((data: string) => {
            // new Date(Date.now())
            this.setState({ clockStr: data });
        });


        // this.timer = setInterval(() => {
        //     // new Date(Date.now())
        //     const now = moment().tz('Europe/Moscow');
        //     this.setState({ clockStr: now.format('HH:mm:ss') });
        // }, 1000);
    }

    private stopTimer(): void {
        pubSub.unsubscribeAll();
        // clearInterval(this.timer);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    render() {
        return <div>{this.state.clockStr}</div>;
    }
}