import React from 'react';
import style from "./ContactsInfo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactsInfo = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.servicesWrapper}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faEnvelope}/>
                <h2 className={style.title}>GET IN TOUCH</h2>
                <span className={style.arrow}>--></span>
                <p className={style.info}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
                    <br/>
                    <span>incididunt ut labore et dolore magna aliqua.</span>
                </p>
            </div>
        </div>
    );
};

export default ContactsInfo;