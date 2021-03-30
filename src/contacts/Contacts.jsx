import React from "react";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title/Title';
import {Form} from "./Form/Form";
import sprite from "../assets/svg/sprite.svg";


export const Contacts = (props) => {

    const dataContact = [
        {id: 1, title: 'Email', svgHref: '#mail', text: 'romanfedoc@ya.ru'},
        {id: 2, title: 'Telegram', svgHref: '#telegram', text: '@fdsrmn'},
        {id: 3, title: 'Местонахождение', svgHref: '#location', text: 'Россия, Новосибирск'},
    ]

    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Контакты'}/>
                <div className={style.infoGroup}>
                    {
                        dataContact.map(el => <div key={el.id} className={style.itemInfo}>
                                <svg className={style.icon}>
                                    <use href={sprite + el.svgHref}/>
                                </svg>
                                <div className={style.textInfo}>
                                    <h4>{el.title}</h4>
                                    <p>{el.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Form setIsLoading={props.setIsLoading}/>
            </div>
        </div>
    );
}
