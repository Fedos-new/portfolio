import React from "react";
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Parallax } from 'react-parallax';
import bg from '../assets/img/bg_remoteWork.jpg'

export const RemoteWork = () => {
    return (
        <Parallax  bgImage={bg} bgImageAlt="bg" strength={930}>
        <div className={style.remoteWorkBlock}>
            <div className={style.blackLayer}>
                <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                    <h2 className={style.title}>Могу рассмотреть вариант удаленной работы</h2>
                    {/*<Button name={'Написать мне'}/>*/}
                </div>
            </div>

        </div>
        </Parallax>
    );
}
