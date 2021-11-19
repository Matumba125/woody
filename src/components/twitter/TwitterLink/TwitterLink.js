import React, {useEffect, useState} from 'react';
import style from './TwitterLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
        <div className={style.contentWrapper}>
            <div className={style.linkWrapper}>
            <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faTwitter}/>
                <h2 className={style.title}>OUR TWITTER</h2>
                <span className={style.separator}>{`//`}</span>
                <div className={style.twitWrapper}>
                    {twit}
                </div>
            </div>
        </div>
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