import React from "react";
import style from './Form.module.scss'



export const Form = () => {
    return (
                <div className={style.formBlock}>
                    <form className={style.form}>
                        <div className={style.groupDataPerson}>
                            <div className={`${style.name} ${style.groupWrap}`}>
                                <input type="text" className={style.itemFrom}/>
                                <label className={style.labelFrom}>Ваше имя</label>
                            </div>
                            <div className={`${style.email} ${style.groupWrap}`}>
                                <input type="email" className={style.itemFrom} required/>
                                <label className={style.labelFrom}>Email</label>
                            </div>
                        </div>
                        <div className={style.groupWrap}>
                            <input type="text" className={style.itemFrom}/>
                            <label className={style.labelFrom}>Тема</label>
                        </div>
                        <div className={style.groupWrap}>
                            <textarea name="message" id="" cols="30" rows="10" className={style.itemFrom}/>
                            <label className={style.labelFrom}>Сообщение</label>
                        </div>
                        <div>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </div>

    );
}
