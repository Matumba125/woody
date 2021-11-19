import React, {useEffect, useState} from 'react';
import style from './Countdown.module.css'

const Countdown = () => {

    const calculateCountdown = () =>{

        const difference = +new Date(`12/31/2022/15:00`) - +new Date();

        let timeLeft ={}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateCountdown())

    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(calculateCountdown());
        }, 1000);
        return () => clearTimeout(timer);
    })

    return (
        <div className={style.countdownWrapper}>
            <div className={style.timeWrapper}>
                {timeLeft.days}
                <span>days</span>
            </div>
            <div className={style.timeWrapper}>
                {timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`}
                <span>hours</span>
            </div>
            <div className={style.timeWrapper}>
                {timeLeft.minutes > 9 ? timeLeft.minutes : `0${timeLeft.minutes}`}
                <span>minutes</span>
            </div>
            <div className={style.timeWrapper}>
                {timeLeft.seconds > 9 ? timeLeft.seconds : `0${timeLeft.seconds}`}
                <span>seconds</span>
            </div>
        </div>
    );
};

export default Countdown;