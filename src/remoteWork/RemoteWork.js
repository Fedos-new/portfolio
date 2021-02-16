import React from "react";
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Button} from '../common/components/Button/Button';


export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
        <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h2 className={style.title}>Могу рассматреть вариант удаленной работы</h2>
                <Button name={'Написать мне'}/>
        </div>
        </div>
    );
}
