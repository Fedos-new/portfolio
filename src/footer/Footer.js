import React from "react";
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Федосов Роман</h2>
                <div>
                    <ul className={style.footerItems}>
                        <li className={style.item}></li>
                        <li className={style.item}></li>
                        <li className={style.item}></li>
                        <li className={style.item}></li>
                    </ul>

                </div>
                <p>©2020 Все права защищены</p>
            </div>
        </div>
    );
}