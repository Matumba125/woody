import React from 'react';
import {Wrapper} from "../../../common/styles";
import styled from "styled-components";
import {useFormik} from "formik";

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

const Error = styled.span`
  margin: 5px 0;
  color: red;
  font-size: 14px;
`

const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Please enter your email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.name) {
                errors.name = 'Please enter your name';
            } else if (!/^[A-Z0-9._%+-]{3,}$/i.test(values.name)) {
                errors.name = 'Name must be longer than 2 symbols';
            }

            if (!values.message) {
                errors.message = 'Please enter your message';
            }

            return errors;

        },
        onSubmit: () => {
            formik.resetForm()
            formik.errors = {}
        }
    })


    return (
        <Wrapper justifyContent={'center'}>
            <Form onSubmit={formik.handleSubmit}>
                <Input
                    placeholder={'Name'}
                    {...formik.getFieldProps('name')}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name &&
                <Error>{formik.errors.name}</Error>
                }
                <Input
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email &&
                <Error>{formik.errors.email}</Error>
                }
                <Textarea
                    type={'textarea'}
                    placeholder={'Message'}
                    {...formik.getFieldProps('message')}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message &&
                <Error>{formik.errors.message}</Error>
                }
                <SubmitButton type={'submit'}>Send</SubmitButton>
            </Form>
        </Wrapper>
    );
};

export default ContactsForm;