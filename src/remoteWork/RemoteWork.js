import React from "react";
import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
        <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
            <div >
                <h2 className={style.title}>Рассматриваю вариант удаленной работы</h2>
                <button>Нанять меня</button>
            </div>
        </div>
        </div>
    );
}