import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Arrow, Wrapper} from "../../../common/styles";
import bg from '../../../common/img/contact.jpg'
import styled from "styled-components";

const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h2 {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 15px;
    text-align: right;
  }
`

const Info = styled.p`
  color: #FFFFFF;
  text-align: right;
`

const ContactInfo = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1035px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

const InfoItem = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2px;

  h2 {
    margin-top: 20px;
    font-size: 14px;
    color: #FFFFFF;
  }

  span {
    width: 85%;
    font-size: 14px;
    color: #FFFFFF;
    word-break: break-all;
    text-align: right;
  }

  @media screen and (max-width: 1035px) {
    margin-bottom: 10px;
  }
`

const ContactsInfo = () => {
    return (
        <Wrapper background={bg} justifyContent={'flex-end'}>
            <Contacts>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faEnvelope}/>
                <h2>GET IN TOUCH</h2>
                <Arrow direction={'right'}>--></Arrow>
                <Info>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
                    <br/>
                    <span>incididunt ut labore et dolore magna aliqua.</span>
                </Info>
                <ContactInfo>
                    <InfoItem>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faMapMarkerAlt}/>
                        <h2>ADDRESS</h2>
                        <span>Kinglake West VIC 3757, Australia</span>
                    </InfoItem>
                    <InfoItem>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPhone}/>
                        <h2>PHONE</h2>
                        <span>+61383766284</span>
                    </InfoItem>
                    <InfoItem>
                        <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPaperPlane}/>
                        <h2>LOCATION</h2>
                        <span>youremail@youremailaddress.com</span>
                    </InfoItem>
                </ContactInfo>
            </Contacts>
        </Wrapper>
    );
};

export default ContactsInfo;