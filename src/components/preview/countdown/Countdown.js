import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const CountdownWrapper = styled.div`
  line-height: 35px;
  display: flex;
  font-family: Raleway, Helvetica, Arial, sans-serif;
  font-size: 2.7em;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 1px;
  text-transform: none;
  color: #fff;
  z-index: 2;
  margin-left: -35px;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`

const TimeItem = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  letter-spacing: 0;
  font-size: 35px;
  font-style: normal;
  margin: 0 35px;
  text-align: center;

  span {
    font-size: 14px;
    text-align: center;
    font-weight: 300;
  }
`



const Countdown = () => {

    const calculateCountdown = () => {

        const difference = +new Date(`12/31/2022/15:00`) - +new Date();

        let timeLeft = {}

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
        const timer = setTimeout(() => {
            setTimeLeft(calculateCountdown());
        }, 1000);
        return () => clearTimeout(timer);
    })

    return (
        <CountdownWrapper>

            <TimeItem>
                {timeLeft.days}
                <span>days</span>
            </TimeItem>
            <TimeItem>
                {timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`}
                <span>hours</span>
            </TimeItem>
            <TimeItem>
                {timeLeft.minutes > 9 ? timeLeft.minutes : `0${timeLeft.minutes}`}
                <span>minutes</span>
            </TimeItem>
            <TimeItem>
                {timeLeft.seconds > 9 ? timeLeft.seconds : `0${timeLeft.seconds}`}
                <span>seconds</span>
            </TimeItem>
        </CountdownWrapper>
    );
};

export default Countdown;