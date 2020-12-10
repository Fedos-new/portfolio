import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title';


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} />
                <div>
                    <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button className={style.btn}>Отправить</button>
                </div>
            </div>
        </div>
    );
}