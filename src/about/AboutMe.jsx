import React from 'react';
import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photoJpg from '../assets/img/photo.jpg'
import cv from '../assets/cv/CV Roman Fedosov.pdf'
import {Button} from "../common/components/Button/Button";
import {Title} from "../common/components/Title/Title";
import sprite from '../assets/svg/sprite.svg'


export const AboutMe = () => {

    return (
        <div id="about" className={style.aboutBlock}>
            <Title title={'Обо мне'} styleExtra={style.titleAbout}/>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>

                <img src={photoJpg} className={style.photo} alt="My_photo"/>

                <div className={style.text}>
                    <span>Добро пожаловать!</span>
                    <div className={style.textBody}>
                        <p>Меня зовут Роман. Я разрабатываю сайты и веб-приложения. Во время разработки всегда стараюсь
                            сделать проект более понятным и удобным, добавлять крутые
                            фичи. Легко увлекаюсь работой у которой четко виден
                            результат. Люблю решать задачи на <a
                                className={style.refCodewars}
                                href="https://www.codewars.com/users/Fedosnew" target="_blank"
                                rel="noopener noreferrer">Codewars.com</a>. Изучаю английский язык.</p>
                    </div>
                    <div className={style.ability}>
                        <div className={style.abilityItem}>
                            <div className={style.abilityTitle}>Английский язык: <span>A2</span></div>
                            <div className={style.abilityTitle}>Хобби:

                                <span className={style.tooltipTriangle} data-tooltip="Люблю бегать">
                                 <svg className={style.icon}>
                                    <use href={sprite + "#run"}/>
                                </svg>
                                </span>

                                <span className={style.tooltipTriangle} data-tooltip="Нравится рисовать">
                                <svg className={style.icon}>
                                    <use href={sprite + "#paint"}/>
                                </svg>
                                    </span>
                                <span className={style.tooltipTriangle} data-tooltip="Играю в шахматы">
                                <svg className={style.icon}>
                                    <use href={sprite + "#chess"}/>
                                </svg>
                                </span>
                            </div>
                        </div>
                        <div className={style.btnDownload}>
                            <Button
                                name={'Скачать CV'}
                                href={cv}
                                download={'CV Roman Fedosov'}
                            />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}
