import React from 'react';
import logo from '../logo.svg';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.wraper}>
               <div className={style.container}>
                <h3 >Мои скилы</h3>

                <div className={style.skills}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>

            </div>
        </div>
    );
}

export default Skills;