import React from 'react';
import style from './Preview.module.css'
import Countdown from "./countdown/Countdown";
import logo from '../../common/img/logo.png'

const Preview = () => {
    return (
        <header className={style.headerWrapper}>
            <div className={style.mainWrapper}>
                <img alt={'logo'} src={logo} className={style.logo}/>
                <h1>OUR WEBSITE IS UNDER CONSTRUCTION.</h1>
                <p>
                    We are working very hard to give you the best experience with this one.
                    <br/>
                    You will love Woody as much as we do. It will morph perfectly on your needs!
                </p>
                <Countdown/>
            </div>
            <div className={style.back}/>
        </header>
    );
};

export default Preview;