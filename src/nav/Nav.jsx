import React from 'react';
import style from './Nav.module.scss';
import Links from "./Links/Links";


const Nav = () => {
    return (
        <Links wrap={style.nav}
        />
    );
}

export default Nav;
