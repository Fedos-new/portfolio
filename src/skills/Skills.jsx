import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title/Title';
import sprite from '../assets/svg/sprite.svg'


export const Skills = () => {

    const dataSkills = [
        {id:1, title:'JS', svgHref:'#js', description: 'Работаю по новым стандартам от ES6 и выше'},
        {id:2, title:'React', svgHref:'#react', description: 'Создаю SPA приложения. Использую Hooks, Redux-Thunk, React Router, Formik, Axios, Material-UI и т.д.'},
        {id:3, title:'Redux', svgHref:'#redux', description: 'Управляю состоянием приложения с помощью Redux. Redux-thunk, redux-saga. Знаком с Redux Toolkit.'},
        {id:4, title:'Sass', svgHref:'#sass', description: 'Использую препроцессоры SCSS/SASS'},
        {id:5, title:'HTML/CSS', svgHref:'#htmlCss', description: 'Делаю адаптивную кроссбраузерную вёрстку. Flexbox, Grid, Style Module'},
        {id:6, title:'TypeScript', svgHref:'#ts', description: 'Для уменьшения ошибок при написании кода использую типизацию TS'}
    ]

    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Знания и навыки'}/>
                <span className={style.descriptionSpan}>Нравится постоянно развиваться, изучать и пробовать новые технологии</span>
                <div className={style.skills}>
                    {
                        dataSkills.map(el => <Skill
                            key={el.id}
                            svgHref={sprite + el.svgHref}
                            title={el.title}
                            description={el.description}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}
