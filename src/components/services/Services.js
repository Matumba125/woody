import React from 'react';
import style from "./Services.module.css";
import ServicesDescription from "./ServicesDescription/ServicesDescription";
import ServicesInfo from "./ServicesInfo/ServicesInfo";

const Services = () => {
    return (
        <div className={style.contentWrapper}>
            <ServicesDescription/>
            <ServicesInfo/>
        </div>
    );
};

export default Services;