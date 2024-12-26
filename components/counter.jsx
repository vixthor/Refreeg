'use client';
import CountUp from "react-countup";


export function Counter({ start, end, duration }) {
    return (
        <CountUp
            start={start}
            end={end}
            delay={duration}
        />
    );
}