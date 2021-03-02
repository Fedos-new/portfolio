import React from "react";
import style from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <svg className={style.icon}>
                <use href={props.svgHref}/>
            </svg>
            <h3 className={style.techTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
