import React from 'react';
import style from './Twitter.module.css'
import TwitterDescription from "./Description/TwitterDescription";
import TwitterLink from "./Link/TwitterLink";

const Twitter = () => {
    return (
        <div className={style.contentWrapper}>
            <TwitterDescription/>
            <TwitterLink/>
        </div>
    );
};

export default Twitter;