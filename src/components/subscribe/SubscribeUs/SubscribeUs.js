import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {Separator, TitleWrapper, Wrapper} from "../../../common/styles";
import bg from '../../../common/img/subscribe.jpg'
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: solid 2px #FFFFFF;
  height: 45px;
  width: 45%;
  color: #FFFFFF;
  word-spacing: 1px;
  padding-left: 20px;
  outline: none;
  font-size: 12px;
  ::placeholder{
    color: #FFFFFF;
  }
`

const SubmitButton = styled.div`
  background-color: rgba(0, 0, 0, 0);
  color: #FFFFFF;
  width: 15%;
  border: 2px solid #FFFFFF;
  outline: none;
  font-weight: 600;
  height: 47px;
  margin-left: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubscribeUs = () => {
    return (
        <Wrapper background={bg} justifyContent={'center'}>
            <TitleWrapper alignItems={'center'}>
                <FontAwesomeIcon size={'2x'} color={'#fff'} icon={faPaperPlane}/>
                <h2>SUBSCRIBE</h2>
                <Separator>{'//'}</Separator>
            </TitleWrapper>
            <InputWrapper>
                <Input placeholder={'Enter your email address'}/>
                <SubmitButton type={'submit'}>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </SubmitButton>
            </InputWrapper>
        </Wrapper>
    );
};

export default SubscribeUs;