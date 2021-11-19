import React from 'react';
import ContactsInfo from "./ContactsInfo/ContactsInfo";

const Contacts = () => {
    return (
        <div>
            <ContactsInfo/>
            <Contacts/>
        </div>
    );
};

export default Contacts;