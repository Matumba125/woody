import React from 'react';
import {Wrapper} from "../../../common/styles";
import styled from "styled-components";

const Form = styled.form`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

const Input = styled.input`
  height: 15%;
  background: transparent;
  border: 1px solid #EDEDED;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
`

const Textarea = styled.input`
  height: 100px;
  background: transparent;
  border: 1px solid #EDEDED;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  overflow: auto;
  font-family: inherit;
`

const SubmitButton = styled.button`
  min-height: 40px;
  height: 15%;
  color: #fff;
  background-color: #24B7A4;
  border: none;
  text-transform: uppercase;
  font-family: inherit;
`

const ContactsForm = () => {
    return (
        <Wrapper justifyContent={'center'}>
            <Form>
                <Input placeholder={'Name'}/>
                <Input placeholder={'Email'}/>
                <Textarea type={'textarea'} placeholder={'Message'}/>
                <SubmitButton type={'submit'}>Send</SubmitButton>
            </Form>
        </Wrapper>
    );
};

export default ContactsForm;