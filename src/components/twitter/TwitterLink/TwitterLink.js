import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Separator, TitleWrapper, Wrapper} from "../../../common/styles";
import bg from '../../../common/img/twitter.jpg'
import styled from "styled-components";

const TwitWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Twit = styled.p`
  color: #FFFFFF;
  text-align: center;
  width: 80%;
  a{
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
  }
`

const TwitterLink = () => {

    const [twit, setTwit] = useState(<FirstTwit/>)
    const [handler, setHandler] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            if (handler === 1) {
                setTwit(<SecondTwit/>)
                setHandler(2)
            } else {
                setTwit(<FirstTwit/>)
                setHandler(1)
            }
        }, 10000)
    }, [twit])

    return (
        <Wrapper background={bg} justifyContent={'center'}>
            <TitleWrapper alignItems={'center'}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faTwitter}/>
                <h2>OUR TWITTER</h2>
                <Separator>{`//`}</Separator>
                <TwitWrapper>
                    {twit}
                </TwitWrapper>
            </TitleWrapper>
        </Wrapper>
    );
};

const SecondTwit = () => {
    return <Twit>
        16 November 2021 -
        <a href={'https://twitter.com/fooconner'}>@fooconner </a>
        <a href={'https://twitter.com/EnvatoMarket'}>@EnvatoMarket </a>
        Hi <a href={'https://twitter.com/fooconner'}>@fooconner </a>,
        Thanks for getting in touch.
        We're engaging with the author…
        <a href={'https://t.co/QqaeSpDqgb'}>https://t.co/QqaeSpDqgb</a>
    </Twit>
}

const FirstTwit = () => {
    return <Twit>
        11 November 2021 -
        Want to elevate your social media marketing strategy?
        Here are the top free and premium templates you'll definitely…
        <a href={'https://t.co/0Ogc2Ir7lF'}>https://t.co/0Ogc2Ir7lF</a>
    </Twit>
}

export default TwitterLink;