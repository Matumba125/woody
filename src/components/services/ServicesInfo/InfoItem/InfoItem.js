import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './InfoItem.css'
import styled from "styled-components";

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 15px;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 1035px){
    width: 80%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  h2{
    font-size: 14px;
  }
`

const Description = styled.div`
  margin-left: 70px;
  @media screen and (max-width: 1035px){
    text-align: center;
    margin-left: 0;
  }
`

const InfoItem = (props) => {
    return (
        <InfoWrapper>
            <FontAwesomeIcon icon={props.icon} color={'#2CC9B4'}/>
            <Description>
                <h2>{props.title}</h2>
                <p>
                    We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.
                </p>
            </Description>
            
        </InfoWrapper>
    );
};

export default InfoItem;