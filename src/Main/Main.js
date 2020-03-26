import React from 'react';
import logo from '../logo.svg';
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Привет</span>
                    <span>Меня зовут Роман Федосов</span>
                    <span>я front-end разработчик</span>
                </div>
                <div className={style.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;