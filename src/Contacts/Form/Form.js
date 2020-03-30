import React from 'react';
import style from '../Form/Form.module.css';

function Form() {
    return (
        <div className={style.form}>
            <div className={style.form__body}>
                <div className={style.form__input1}>
                    <input value="<input/>"/>
                </div>
                <div className={style.form__input1}>
                    <input value="<input/>"/>
                </div>
                <div className={style.form__textarea}>
                    <textarea value="<textarea/>"/>
                </div>
            </div>
        </div>
    );
}

export default Form;