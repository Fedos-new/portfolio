import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/Title/Title';
import todolistPng from '../assets/img/todolist.png'
import socialPng from '../assets/img/socialNetwork.png'
import limponPng from '../assets/img/limpon.png'

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialPng})`,

    }
    const todolist = {
        backgroundImage: `url(${todolistPng})`,

    }
    const limpon = {
        backgroundImage: `url(${limponPng})`,

    }


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Проекты"}/>
                <div className={style.projects}>
                    <Project style={todolist}
                             title={"To Do List"}
                             discription={"Создал SPA приложение - Таск менеджер. Технологии: TypeScript, Redux, Material-UI, Formik, Axios"}/>
                    <Project style={social}
                             title={"Social Network"}
                             discription={"Создал SPA приложение - Социальная сеть. Технологии: JS, Redux, Redux-Form, Axios"}/>
                    <Project style={limpon}
                             title={"Limpon"}
                             discription={"Сверстал сайт для ИТ-индустрии по макету psd. Технологии: HTML,CSS,JQuery"}/>
                </div>
            </div>
        </div>
    );
}
