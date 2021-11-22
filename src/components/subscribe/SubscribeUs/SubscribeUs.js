import React from 'react';
import style from './SubscribeUs.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {Separator, TitleWrapper, Wrapper} from "../../../common/styles";
import bg from '../../../common/img/subscribe.jpg'



const SubscribeUs = () => {
    return (
        <Wrapper background={bg} justifyContent={'center'}>
            <TitleWrapper alignItems={'center'}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPaperPlane}/>
                <h2>SUBSCRIBE</h2>
                <Separator>{'//'}</Separator>
            </TitleWrapper>
            <div className={style.inputWrapper}>
                <input placeholder={'Enter your email address'} className={style.emailInput}/>
                <button type={'submit'} className={style.submitBtn}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </Wrapper>
    );
};

export default SubscribeUs;