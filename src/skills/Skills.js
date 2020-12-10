import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/Title';


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           discription={"Type errors will show up in the same console as the build one. "}/>
                    <Skill title={"CSS"}
                           discription={"You'll have to fix these type errors before you continue development or build your project. For advanced configuration"}/>
                    <Skill title={"React"}
                           discription={"Type errors will show up in the same console as the build one. "}/>
                </div>
            </div>
        </div>
    );
}