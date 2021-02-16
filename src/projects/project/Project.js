import React from "react";
import style from './Project.module.scss'
import {Button} from '../../common/components/Button/Button';


export const Project = (props) => {
    return (<>
            <div className={style.project} style={props.style}>
                <div className={style.blackLayer}>

                <div className={style.description_project}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.description}>{props.discription}</span>
                </div>
                </div>
                <Button name={'Смотреть'} styleExtra={style.bt}/>
            </div>
        </>
    );
}
