import React from "react";
import style from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.discription}</span>
        </div>
    );
}