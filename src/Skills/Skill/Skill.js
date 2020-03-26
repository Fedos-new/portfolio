import React from 'react';
import style from '../Skill/Skill.module.css';

function Skills() {
    return (
        <div className={style.box}>
            <div className={style.skill}>
                <div className={style.skillbox}>
                    <img src="https://f0.pngfuel.com/png/544/412/react-business-javascript-computer-software-npm-business-png-clip-art.png"/>
                    <h4>React</h4>

                    <div className={style.text}>Подробное описание навыка</div>
                </div>
            </div>

        </div>

    );
}

export default Skills;