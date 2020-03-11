import React from 'react';
import logo from './logo.svg';
import style from './Header.module.css';
import NavMenu from "./NavMenu";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <NavMenu/>

            </div>
        </div>
    );
}

export default Header;
