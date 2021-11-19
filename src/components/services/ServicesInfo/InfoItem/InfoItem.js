import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from './InfoItem.module.css'
import './InfoItem.css'

const InfoItem = (props) => {
    return (
        <div className={style.infoWrapper}>
            <FontAwesomeIcon icon={props.icon} color={'#2CC9B4'} className={style.icon}/>
            <div className={style.description}>
                <h2 className={style.title}>{props.title}</h2>
                <p>
                    We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.
                </p>
            </div>
            
        </div>
    );
};

export default InfoItem;