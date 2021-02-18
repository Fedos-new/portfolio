import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sprite from '../assets/svg/sprite.svg'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <ul className={style.footerItems}>
                        <li className={style.item}>
                            <a href="https://github.com/Fedos-new" target="_blank" rel="noopener noreferrer">
                                <svg className={style.icon}>
                                    <use href={sprite + "#github"}/>
                                </svg>
                            </a>
                        </li>
                        <li className={style.item}>
                            <a href="https://www.linkedin.com/in/roman-fedosov-727630171/" target="_blank" rel="noopener noreferrer">
                                <svg className={style.icon}>
                                    <use href={sprite + "#linkedIn"}/>
                                </svg>
                            </a>
                        </li>
                        <li className={style.item}>
                            <a href="https://www.instagram.com/fedosrom/" target="_blank" rel="noopener noreferrer">
                                <svg className={style.icon}>
                                    <use href={sprite + "#instagram"}/>
                                </svg>
                            </a>
                        </li>
                        <li className={style.item}>
                            <a href="https://twitter.com/fedosnew" target="_blank" rel="noopener noreferrer">
                                <svg className={style.icon}>
                                    <use href={sprite + "#twitter"}/>
                                </svg>
                            </a>
                        </li>
                        <li className={style.item}>
                            <a href="https://t.me/fedosrom" target="_blank" rel="noopener noreferrer">
                                <svg className={style.icon}>
                                    <use href={sprite + "#telegram"}/>
                                </svg>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}
