import React from 'react';
import style from '../Skill/Skill.module.css';


function Skills() {
    return (
        <div className={style.itemSkill}>
            <div className={style.itemSkill__icon}>
                <img src="https://f0.pngfuel.com/png/544/412/react-business-javascript-computer-software-npm-business-png-clip-art.png"/>
            </div>
            <div className={style.itemSkill__title}>
                <p>React</p>
            </div>
            <div className={style.itemSkill__text}>Подробное описание навыка Подробное описание навыка</div>
        </div>

    );
}


export default Skills;