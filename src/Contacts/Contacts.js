import React from 'react';
import style from './Contacts.module.css';
import Form from "./Form/Form";

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={style.contacts__body}>
                <div className={style.contacts__title}>
                        <p>Контакты</p>
                </div>
                <div className={style.contacts__from}>
                    <Form/>
                </div>
                <div className={style.contacts__button}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;