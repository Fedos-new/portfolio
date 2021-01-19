import React from "react";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title';
import {Button} from '../common/components/Button/Button';


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <div className={style.formBlock}>
                    <form className={style.form}>
                        <div className={style.groupDataPerson}>
                            <div className={`${style.name} ${style.groupWrap}`}>
                                <input type="text" className={style.itemFrom}/>
                                <label className={style.labelFrom}>Full Name</label>
                            </div>
                            <div className={`${style.email} ${style.groupWrap}`}>
                                <input type="email" className={style.itemFrom} required/>
                                <label className={style.labelFrom}>Email</label>
                            </div>
                        </div>
                        <div className={style.groupWrap}>
                            <input type="text" className={style.itemFrom}/>
                            <label className={style.labelFrom}>Subject</label>
                        </div>
                        <div className={style.groupWrap}>
                            <textarea name="message" id="" cols="30" rows="10" className={style.itemFrom}/>
                            <label className={style.labelFrom}>Message</label>
                        </div>

                        <Button name={'Отправить'} className={style.btn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}