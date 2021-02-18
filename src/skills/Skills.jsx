import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title/Title';
import sprite from '../assets/svg/sprite.svg'


export const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Знания и навыки'}/>
                <span className={style.descriptionSpan}>Нравится постоянно развиваться, узучать и пробовать новые технологии</span>
                <div className={style.skills}>
                    <Skill
                        svgHref={sprite + "#js"}
                        title={"JS"}
                        discription={"Работаю по новым стандартам ES6 и выше"}/>

                    <Skill
                        svgHref={sprite + "#react"}
                        title={"React"}
                        discription={"Создаю SPA приложения. Использую Hooks, Redux-Thunk, React Router, Formik, Axios, Material-UI и т.д."}/>
                    <Skill
                        svgHref={sprite + "#redux"}
                        title={"Redux"}
                        discription={"Управляю состоянием приложения с помощью Redux. Знаком с Redux Toolkit"}/>
                    <Skill
                        svgHref={sprite + "#sass"}
                        title={"Sass"}
                        discription={"Использую препроцессоры SCSS/SASS "}/>
                    <Skill
                        svgHref={sprite + "#htmlCss"}
                        title={"HTML/CSS"}
                        discription={"Делаю адаптивную кроссбраузерную вёрстку. Flexbox, Grid, Module CSS."}/>
                    <Skill
                        svgHref={sprite + "#ts"}
                        title={"TypeScript"}
                        discription={"Для уменьшения ошибок при написании кода испольую типизацию TS "}/>

                </div>
            </div>
        </div>
    )
}
