import React from 'react'
import style from "./ServicesInfo.module.css";
import InfoItem from "./InfoItem/InfoItem";
import {faBullhorn, faCode, faLaptop} from "@fortawesome/free-solid-svg-icons";
import {faHtml5} from '@fortawesome/free-brands-svg-icons'


const ServicesInfo = () => {

    return (
        <div className={style.contentWrapper}>
            <div className={style.row}>
                <InfoItem icon={faLaptop} title={'INNOVATIVE IDEAS'}/>
                <InfoItem icon={faCode} title={'CLEAN CODE'}/>
            </div>
            <div className={style.separator}/>
            <div className={style.row}>
                <InfoItem icon={faBullhorn} title={'24/7 SUPPORT'}/>
                <InfoItem icon={faHtml5} title={'HTML5'}/>
            </div>
        </div>
    );
};

export default ServicesInfo;