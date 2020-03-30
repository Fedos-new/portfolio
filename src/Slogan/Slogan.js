import React from 'react';
import style from './Slogan.module.css';

function Slogan() {
    return (
        <div className={style.slogan}>
            <div className={style.slogan__body}>
                <div className={style.slogan__title}>
                    <p>Рассматриваю вариант удаленной работы</p>
                </div>
                <div className={style.slogan__button}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;