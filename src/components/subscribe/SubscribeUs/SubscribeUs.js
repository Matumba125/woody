import React from 'react';
import style from './SubscribeUs.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const SubscribeUs = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.header}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPaperPlane}/>
                <h2>SUBSCRIBE</h2>
                <span>{'//'}</span>
            </div>
            <div className={style.inputWrapper}>
                <input placeholder={'Enter your email address'} className={style.emailInput}/>
                <button type={'submit'} className={style.submitBtn}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
};

export default SubscribeUs;