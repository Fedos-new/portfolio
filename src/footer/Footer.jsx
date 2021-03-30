import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sprite from '../assets/svg/sprite.svg'


export const Footer = () => {

    const dataSocial = [
        {id: 1, href: 'https://github.com/Fedos-new', spriteLink: "#github"},
        {id: 2, href: 'https://www.linkedin.com/in/roman-fedosov-727630171/', spriteLink: "#linkedIn"},
        {id: 3, href: 'https://www.instagram.com/fdsrmn/', spriteLink: "#instagram"},
        {id: 4, href: 'https://twitter.com/fedosnew', spriteLink: "#twitter"},
        {id: 5, href: 'https://t.me/rmnfds', spriteLink: "#telegram"},
    ]

    return (
        <div id="footer" className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <ul className={style.footerItems}>
                        {
                            dataSocial.map(el => <li className={style.item} key={el.id}>
                                <a href={el.href} target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <svg className={style.icon}>
                                            <use href={sprite + `${el.spriteLink}`}/>
                                        </svg>
                                    </div>
                                </a>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
