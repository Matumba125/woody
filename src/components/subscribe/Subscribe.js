import React from 'react';
import style from './Subscribe.module.css'
import SubscribeUs from "./SubscribeUs/SubscribeUs";

const Subscribe = () => {
    return (
        <div className={style.contentWrapper}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405062.83490516245!2d145.08564483913685!3d-37.5184502059667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad7c5d73f9e88bb%3A0x40579a430a07e40!2z0JrQuNC90LPQu9C10LnQuiDQl9Cw0L_QsNC0INCS0LjQutGC0L7RgNC40Y8gMzc1Nywg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sby!4v1637565470815!5m2!1sru!2sby"
                allowFullScreen="" loading="lazy" className={style.map}></iframe>
            <SubscribeUs/>
        </div>
    );
};

export default Subscribe;