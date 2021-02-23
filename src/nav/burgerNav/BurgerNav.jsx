import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import Links from "../Links/Links";
import sprite from "../../assets/svg/sprite.svg";


const BurgerNav = () => {
    const [menuIsOpen,setMenuIsOpen] = useState(false)


    const onToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }



    return (<div className={style.burgerNavWrap}>
            <Links wrap={menuIsOpen ? `${style.burgerNav} ${style.show}` : style.burgerNav}
            />
            <div className={style.burgerBtn} onClick={onToggleMenu}>
                <svg className={style.icon}>
                <use href={sprite + `${ menuIsOpen ? '#closeMenu': '#Menu'}`}/>
                </svg>
            </div>
        </div>

    );
}

export default BurgerNav;
