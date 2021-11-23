import React from 'react';
import Countdown from "./countdown/Countdown";
import logo from '../../common/img/logo.png'
import styled from "styled-components";
import bg from '../../common/img/headerBack.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 60%;
  min-height: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 90%;
    align-items: center;
  }

  p {
    font-size: 14px;
    color: rgb(255, 255, 255);
    word-spacing: 1px;
    line-height: 25px;
    font-weight: 400;
    position: relative;
    z-index: 999;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 25px;
    color: #FFFFFF;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 999;
  }
`

const Logo = styled.img`
  width: 230px;
  height: 157px;
  margin-bottom: 35px;
  @media screen and (max-width: 600px) {
    width: 45%;
    height: 30%;
  }
`

const BackDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.background}) center;
  background-size: cover;
  z-index: -9999;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const Preview = () => {
    return (
        <HeaderWrapper>
            <Header>
                <Logo alt={'logo'} src={logo}/>
                <h1>OUR WEBSITE IS UNDER CONSTRUCTION.</h1>
                <p>
                    We are working very hard to give you the best experience with this one.
                    <br/>
                    You will love Woody as much as we do. It will morph perfectly on your needs!
                </p>
                <Countdown/>
            </Header>
            <BackDiv background={bg}/>
        </HeaderWrapper>
    );
};

export default Preview;