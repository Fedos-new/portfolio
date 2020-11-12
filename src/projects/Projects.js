import React from "react";
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"ToDoList"}
                             discription={"Type errors will show up in the same console as the build one. "}/>
                    <Project title={"Social Network"}
                             discription={"You'll have to fix these type errors before you continue development or build your project. For advanced configuration"}/>
                    <Project title={"Social Network"}
                             discription={"You'll have to fix these type errors before you continue development or build your project. For advanced configuration"}/>
                </div>
            </div>
        </div>
    );
}