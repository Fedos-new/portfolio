import React from 'react';
import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photoJpg from '../assets/img/photo.jpg'


export const AboutMe = () => {

    // const photo = {
    //     backgroundImage: `url(${photoJpg})`,
    // }


    return (
        <div className={style.aboutBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <div className={style.text}>
                    <span>Привет!</span>

                    <p>Я разрабатываю веб-проекты любой сложности. Люблю решать задачи на codewarse.

                    </p>
                </div>
                    <img src={photoJpg} className={style.photo} alt="My_photo"/>
            </div>
        </div>
    );
}
