import React from 'react';
import logo from '../logo.svg';
import style from './Projects.module.css';
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.projects__body}>
                <div className={style.projects__top}>
                    <div className={style.projects__title}>
                        <p>Мои работы</p>
                    </div>
                </div>
                <div className={style.projects__row}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>

    );
}

export default Projects;