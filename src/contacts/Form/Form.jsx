import React, {useState} from "react";
import style from './Form.module.scss'
import axios from "axios";


export const Form = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const changeName = (e) => {
        setName(e.currentTarget.value)
    }
    const changeEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const changeSubject = (e) => {
        setSubject(e.currentTarget.value)
    }
    const changeMessage = (e) => {
        setMessage(e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://server-smtp.herokuapp.com/sendMessage',
            {name, email, subject, message}
        ).then(()=> alert('Ваше письмо улетело этму гению!'))
    }


    return (
        <div className={style.formBlock}>
            <form className={style.form} onSubmit={onSubmit}>
                <div className={style.groupDataPerson}>

                    <div className={`${style.name} ${style.groupWrap}`}>
                        <input type="text"
                               className={style.itemFrom}
                               value={name}
                               onChange={changeName}
                               name="name"
                               required/>
                        <label className={style.labelFrom}>Ваше имя</label>
                    </div>

                    <div className={`${style.email} ${style.groupWrap}`}>
                        <input type="email"
                               className={style.itemFrom}
                               value={email}
                               onChange={changeEmail}
                               name="email"
                               required/>
                        <label className={style.labelFrom}>Email</label>
                    </div>
                </div>

                <div className={style.groupWrap}>
                    <input type="text"
                           className={style.itemFrom}
                           value={subject}
                           onChange={changeSubject}
                           name="subject"
                           required/>
                    <label className={style.labelFrom}>Тема</label>
                </div>

                <div className={style.groupWrap}>
                            <textarea
                                name="message"
                                id="" cols="30"
                                rows="10"
                                className={style.itemFrom}
                                value={message}
                                onChange={changeMessage}
                                required/>
                    <label className={style.labelFrom}>Сообщение</label>
                </div>

                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>
    );
}
