import React, {useState} from "react";
import style from './Form.module.scss'
import axios from "axios";
import {Modal} from "../Modal/Modal";


export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isDisable, setIsDisable] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [sendStatus, setSendStatus] = useState(false)

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
    const clearForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    const onShowModal = () => {
        setIsModalActive(!isModalActive)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsDisable(true)
        axios.post('https://server-send-mail.herokuapp.com/sendMessage',
            {name, email, subject, message}
        ).then(() => {
                setIsDisable(false)
                onShowModal()
            }
        ).catch(() => {
                console.log('Error send message!')
                setSendStatus(true)
                onShowModal()
            }
        )
            .finally(() => {
                clearForm()
            })
    }


    return (
        <div>
            <form className={style.form} onSubmit={onSubmit}>
                <div className={style.formRow}>

                    <div className={`${style.col} ${style.formGroup}`}>
                        <input type="text"
                               className={style.itemFrom}
                               value={name}
                               onChange={changeName}
                               name="name"
                               required/>
                        <label className={style.labelFrom}>Ваше имя</label>
                    </div>

                    <div className={`${style.col} ${style.formGroup}`}>
                        <input type="email"
                               name="email"
                               className={style.itemFrom}
                               value={email}
                               onChange={changeEmail}
                               required/>
                        <label className={style.labelFrom}>Email</label>
                    </div>

                </div>

                <div className={style.formGroup}>
                    <input type="text"
                           name="subject"
                           className={style.itemFrom}
                           value={subject}
                           onChange={changeSubject}

                           required/>
                    <label className={style.labelFrom}>Тема</label>
                </div>

                <div className={style.formGroup}>
                            <textarea
                                name="message"
                                id="" cols="30"
                                rows="7"
                                className={style.itemFrom}
                                value={message}
                                onChange={changeMessage}
                                required/>
                    <label className={style.labelFrom}>Сообщение</label>
                </div>

                <div className={style.wrapBtnSub}>
                    <button type="submit" disabled={isDisable}>Отправить</button>
                </div>
            </form>
            <Modal active={isModalActive} setActive={setIsModalActive}>
                {!sendStatus
                    ? <div>
                        <h5 className={style.mTitle}>Ваше письмо успешно отправленно!</h5>
                        <p className={style.mText}>Постараюсь ответить в ближайшее время. Спасибо за интерес ко
                            мне&#128578;</p>
                    </div>
                    : <div>
                        <h5 className={style.mTitle}>Что-то пошло не так!</h5>
                        <p className={style.mText}>К сожалению, Ваше письмо не отправлено. Ведутся технические работы.
                            Для связи со мной, пожалуйста, используйте email или telegram. Спасибо за понимание.</p>
                    </div>
                }
                <button
                    onClick={onShowModal}
                    className={style.btnOk}
                >Ок
                </button>
            </Modal>
        </div>
    );
}
