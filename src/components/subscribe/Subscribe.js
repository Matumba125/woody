import React from 'react';
import SubscribeUs from "./SubscribeUs/SubscribeUs";
import {SectionWrapper} from "../../common/styles";
import styled from "styled-components";

const Map = styled.iframe`
  width: 50%;
  height: 600px;
  border: 0;
  @media screen and (max-width: 1035px){
    width: 100%;
  }
`

const Subscribe = () => {
    return (
        <SectionWrapper mediaDirection={'column-reverse'}>
            <Map
                title={'map'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405062.83490516245!2d145.08564483913685!3d-37.5184502059667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad7c5d73f9e88bb%3A0x40579a430a07e40!2z0JrQuNC90LPQu9C10LnQuiDQl9Cw0L_QsNC0INCS0LjQutGC0L7RgNC40Y8gMzc1Nywg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sby!4v1637565470815!5m2!1sru!2sby"
                allowFullScreen="" loading="lazy"/>
            <SubscribeUs/>
        </SectionWrapper>
    );
};

export default Subscribe;