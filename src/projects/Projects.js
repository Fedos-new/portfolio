import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from '../common/components/Title';
import todolistPng from '../assets/todolist.png'
import socialPng from '../assets/social.png'
import socialPng2 from '../assets/social.png'

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialPng})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistPng})`,
    }
    const social2 = {
        backgroundImage: `url(${socialPng2})`,
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Project'} />
                <div className={style.projects}>
                    <Project style={social} title={"Social Network"}
                             discription={"Stack: JS, Redux, Redux-Form, Axios, REST API"}/>
                    <Project style={todolist} title={"ToDoList"}
                             discription={"Stack: TypeScript, Redux, Material-UI, Formik, Axios, REST API"}/>
                    <Project style={social2} title={"Social Network"}
                             discription={"You'll have to fix these type errors before you continue development."}/>
                </div>
            </div>
        </div>
    );
}