import React from "react";
import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project }>
            <div className={style.image} style={props.style}>
                <div className={style.bt}>View Project</div>
            </div>
            <div className={style.description_project}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.discription}</span>
            </div>
        </div>
    );
}
