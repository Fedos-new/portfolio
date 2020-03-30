import React from 'react';
import logo from '../logo.svg';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={style.skills}>
            <div className={style.skills__body}>
                <div className={style.skills__top}>
                    <div className={style.skills__title}>
                        <p>Мои скиллы</p>
                    </div>
                </div>
                <div className={style.skills__row}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    );
}


export default Skills;