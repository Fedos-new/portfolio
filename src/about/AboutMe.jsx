import React from 'react';
import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photoJpg from '../assets/img/photo.jpg'
import cv from '../assets/cv/CV Roman Fedosov.pdf'
import {Button} from "../common/components/Button/Button";


export const AboutMe = () => {


    return (
        <div id="about" className={style.aboutBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <div>
                        <p>Я разрабатываю веб-проекты любой сложности. Люблю решать задачи на codewarse. </p>
                        <Button name={'Скачать CV'} href={cv} download={'CV Roman Fedosov'}/>
                    </div>
                </div>
                <img src={photoJpg} className={style.photo} alt="My_photo"/>
            </div>
        </div>
    );
}
