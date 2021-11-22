import React from 'react';
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactsForm from "./ContactsForm/ContactsForm";
import style from './Contacts.module.css'

const Contacts = () => {

    return (
        <div className={style.contentWrapper}>
            <ContactsInfo/>
            <ContactsForm/>
        </div>
    );
};

export default Contacts;