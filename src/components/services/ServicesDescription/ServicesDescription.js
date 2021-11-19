import React from 'react';
import style from "./ServicesDescription.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs} from "@fortawesome/free-solid-svg-icons";

const ServicesDescription = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.servicesWrapper}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faCogs}/>
                <h2 className={style.title}>SERVICES</h2>
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

export default ServicesDescription;