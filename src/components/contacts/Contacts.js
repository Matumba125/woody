import React from 'react';
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactsForm from "./ContactsForm/ContactsForm";
import {SectionWrapper} from "../../common/styles";

const Contacts = () => {

    return (
        <SectionWrapper mediaDirection={'column'}>
            <ContactsInfo/>
            <ContactsForm/>
        </SectionWrapper>
    );
};

export default Contacts;