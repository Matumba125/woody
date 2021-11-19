import React from 'react';
import style from './Twitter.module.css'
import TwitterDescription from "./TwitterDescription/TwitterDescription";
import TwitterLink from "./TwitterLink/TwitterLink";

const Twitter = () => {
    return (
        <div className={style.contentWrapper}>
            <TwitterDescription/>
            <TwitterLink/>
        </div>
    );
};

export default Twitter;