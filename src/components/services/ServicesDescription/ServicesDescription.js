import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import {Arrow, TitleWrapper, Wrapper} from "../../../common/styles";
import styled from "styled-components";

const Info = styled.p`
  color: #FFFFFF;
  text-align: right;
`

const ServicesDescription = () => {
    return (
        <Wrapper background={process.env.PUBLIC_URL + 'assets/services.jpg'} justifyContent={'center'}>
            <TitleWrapper alignItems={'flex-end'}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faCogs}/>
                <h2>SERVICES</h2>
                <Arrow direction={'right'}>--></Arrow>
                <Info>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
                    <br/>
                    <span>incididunt ut labore et dolore magna aliqua.</span>
                </Info>
            </TitleWrapper>
        </Wrapper>
    );
};

export default ServicesDescription;