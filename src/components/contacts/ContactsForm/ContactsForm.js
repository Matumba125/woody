import React from 'react';
import style from './ContactsForm.module.css'

const ContactsForm = () => {
    return (
        <div className={style.contentWrapper}>
            <form className={style.formWrapper}>
                <input className={style.formInput} placeholder={'Name'}/>
                <input className={style.formInput} placeholder={'Email'}/>
                <input type={'textarea'} className={style.message} placeholder={'Message'}/>
                <button type={'submit'} className={style.submit}>Send</button>
            </form>
        </div>
    );
};

export default ContactsForm;