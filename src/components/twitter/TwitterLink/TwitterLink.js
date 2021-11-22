import React, {useEffect, useState} from 'react';
import style from './TwitterLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {Separator, TitleWrapper, Wrapper} from "../../../common/styles";

const TwitterLink = () => {

    const [twit, setTwit] = useState(<FirstTwit/>)
    const[handler, setHandler] = useState(1)

    useEffect(() =>{
        setTimeout(()=>{
            if(handler === 1){
                setTwit(<SecondTwit/>)
                setHandler(2)
            }else {
                setTwit(<FirstTwit/>)
                setHandler(1)
            }
        }, 10000)
    }, [twit])

    return (
        <Wrapper background={process.env.PUBLIC_URL + 'assets/twitter.jpg'} justifyContent={'center'}>
            <TitleWrapper alignItems={'center'}>
            <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faTwitter}/>
                <h2>OUR TWITTER</h2>
                <Separator>{`//`}</Separator>
                <div className={style.twitWrapper}>
                    {twit}
                </div>
            </TitleWrapper>
        </Wrapper>
    );
};

const SecondTwit =() =>{
    return <p className={style.twit}>
        16 November 2021 -
        <a href={'https://twitter.com/fooconner'}>@fooconner </a>
        <a href={'https://twitter.com/EnvatoMarket'}>@EnvatoMarket </a>
        Hi <a href={'https://twitter.com/fooconner'}>@fooconner </a>,
        Thanks for getting in touch.
        We're engaging with the author…
        <a href={'https://t.co/QqaeSpDqgb'}>https://t.co/QqaeSpDqgb</a>
    </p>
}

const FirstTwit =() =>{
    return <p className={style.twit}>
        11 November 2021 -
        Want to elevate your social media marketing strategy?
        Here are the top free and premium templates you'll definitely…
        <a href={'https://t.co/0Ogc2Ir7lF'}>https://t.co/0Ogc2Ir7lF</a>
    </p>
}

export default TwitterLink;