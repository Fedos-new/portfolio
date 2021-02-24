import React from "react";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title/Title';
import {Form} from "./Form/Form";
import sprite from "../assets/svg/sprite.svg";


export const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Контакты'}/>
                <div className={style.infoGroup}>
                    <div className={style.itemInfo}>
                        <svg className={style.icon}>
                            <use href={sprite + "#mail"}/>
                        </svg>
                        <div className={style.textInfo}>
                            <h4>Email</h4>
                            <p>romanfedoc@ya.ru</p>
                        </div>
                    </div>

                    <div className={style.itemInfo}>
                        <svg className={style.icon}>
                            <use href={sprite + "#telegram"}/>
                        </svg>
                        <div className={style.textInfo}>
                            <h4>Telegram</h4>
                            <p>@fedosrom</p>
                        </div>
                    </div>

                    <div className={style.itemInfo}>
                        <svg className={style.icon}>
                            <use href={sprite + "#location"}/>
                        </svg>
                        <div className={style.textInfo}>
                            <h4>Местонахождение</h4>
                            <p>Россия, Новосибирск</p>
                        </div>
                    </div>
                </div>
                <Form />

            </div>
        </div>
    );
}
