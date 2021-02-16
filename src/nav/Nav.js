import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
            <div className={style.nav}>
                <a className={style.link} href="">Главная</a>
                <a className={style.link} href="">Скилы</a>
                <a className={style.link} href="">Проекты</a>
                <a className={style.link} href="">Контакты</a>
            </div>
    );
}

export default Nav;
