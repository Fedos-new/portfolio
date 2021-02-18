import React from 'react';
import style from './BurgerNav.module.scss';
import Links from "../Links/Links";


const BurgerNav = () => {
    return (
        <Links wrap={style.burgerNav}
        />
    );
}

export default BurgerNav;
