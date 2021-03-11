import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/Title/Title';
import todolistPng from '../assets/img/todolist.png'
import socialPng from '../assets/img/socialNetwork.png'
import currencyTablePng from '../assets/img/currencyTable.png'
import constructorPng from '../assets/img/constructor.png'
import blogPng from '../assets/img/blog.png'
import cardsPng from '../assets/img/cards.png'



export const Projects = () => {

    const social = {backgroundImage: `url(${socialPng})`}
    const todolist = {backgroundImage: `url(${todolistPng})`}
    const currencyTable = {backgroundImage: `url(${currencyTablePng})`}
    const constructor = {backgroundImage: `url(${constructorPng})`}
    const blog = {backgroundImage: `url(${blogPng})`}
    const cards = {backgroundImage: `url(${cardsPng})`}

    const dataProjects = [
        {id:1, style:todolist, href:'https://fedos-new.github.io/todolist-ts/',title:'To Do List',
            description: 'Создал SPA приложение - Таск менеджер. Стек: React, TypeScript, Redux, Material-UI, Formik, Axios'},
        {id:2, style: social, href:'https://fedos-new.github.io/social_network_react/#/profile',title:'Social Network',
            description: 'Создал SPA приложение - Социальная сеть. Стек: React, JS, Redux, Redux-Form, Axios'},
        {id:3, style: blog, href:'https://fedos-new.github.io/meteor_test_task',title:'Simple Blog',
            description: 'Создал SPA приложение - Простой блог: Авторы и их статьи. Стек: React, JS, Redux, Material-UI, Axios'},
        {id:4, style: constructor, href:'https://js-constructor-e2ea9.web.app/',title:'Building blocks HTML',
            description: 'Простой конструктор HTML на чистом JS. Стек: HTML, CSS, JS, Parcel, Firebase'},
        {id:5, style: cards, href:'https://fedos-new.github.io/friday/',title:'Memory Cards',
            description: 'Командная разработка SPA приложения - Карточки запоминания. Стек: React, TS, Redux, Material-UI, Formik, Axios'},
        {id:6, style: currencyTable, href:'https://github.com/Fedos-new/test_task_Table',title:'Currency Table',
            description: 'Компонент "Таблица валют". При получении новых данных с сервера отображает их в таблице. Стек: React, TypeScript, Redux-Saga, Axios'},
    ]

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Проекты"}/>
                <span className={style.descriptionSpan}>Все эти и другие мои проекты есть на <a
                    href="https://github.com/Fedos-new" target="_blank"
                    rel="noopener noreferrer">github</a></span>
                <div className={style.projects}>

                    { dataProjects.map(el =>  <Project key={el.id} style={el.style}
                             href={el.href}
                             title={el.title}
                             description={el.description}/>)
                    }
                </div>
            </div>
        </div>
    );
}
