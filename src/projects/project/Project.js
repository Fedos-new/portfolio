import React from "react";
import style from './Project.module.scss'
import {Button} from '../../common/components/Button/Button';


export const Project = (props) => {
    return (
        <div className={style.project }>
            <div className={style.image} style={props.style}>
                <Button name={'View project'} styleExtra={style.bt}/>
            </div>
            <div className={style.description_project}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.discription}</span>
            </div>
        </div>
    );
}
