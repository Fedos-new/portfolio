import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer__body}>
                <div className={style.footer__title}>
                    <p>Федосов Роман</p>
                </div>
                <div className={style.footer__blocks}>
                    <div className={style.footer__box}>
                    <div className={style.footer__block}></div>
                    <div className={style.footer__block}></div>
                    <div className={style.footer__block}></div>
                    <div className={style.footer__block}></div>
                    </div>
                </div>
                <div className={style.footer__footer}>
                    <p>© 2020 Все права защищены</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;