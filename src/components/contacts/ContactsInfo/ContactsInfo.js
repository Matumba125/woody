import React from 'react';
import style from "./ContactsInfo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";

const ContactsInfo = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.contactsWrapper}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faEnvelope}/>
                <h2 className={style.title}>GET IN TOUCH</h2>
                <span className={style.arrow}>--></span>
                <p className={style.info}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
                    <br/>
                    <span>incididunt ut labore et dolore magna aliqua.</span>
                </p>
                <div className={style.dataWrapper}>
                    <div className={style.dataItem}>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faMapMarkerAlt}/>
                        <h2>ADDRESS</h2>
                        <span>Kinglake West VIC 3757, Australia</span>
                    </div>
                    <div className={style.dataItem}>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPhone}/>
                        <h2>PHONE</h2>
                        <span>+61383766284</span>
                    </div>
                    <div className={style.dataItem}>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPaperPlane}/>
                        <h2>LOCATION</h2>
                        <span>youremail@youremailaddress.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsInfo;