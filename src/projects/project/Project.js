import React from "react";
import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project }>
            <div className={style.image}>
                <div className={style.bt}>Смотреть</div>
            </div>
            <div className={style.description_project}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.discription}</span>
            </div>
        </div>
    );
}
