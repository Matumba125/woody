import React from 'react';
import style from "./TeamDescription.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {Arrow, TitleWrapper, Wrapper} from "../../../common/styles";
import bg from '../../../common/img/team.jpg'


const TeamDescription = () => {
    return (
        <Wrapper background={bg} justifyContent={'center'}>
            <TitleWrapper alignItems={'flex-start'}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faUsers}/>
                <h2>MEET OUR TEAM</h2>
                <Arrow direction={'left'}>{'<--'}</Arrow>
                <p className={style.info}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
                    <br/>
                    <span>incididunt ut labore et dolore magna aliqua.</span>
                </p>
            </TitleWrapper>
        </Wrapper>
    );
};

export default TeamDescription;