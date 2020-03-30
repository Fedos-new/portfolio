import React from 'react';
import style from '../Project/Project.module.css';

function Project() {
    return (
        <div className={style.itemProject}>
            <div className={style.itemProject__icon}>
                <button className={style.itemProject__button}>
                    Смотреть
                </button>
            </div>
            <div className={style.itemProject__title}>
                <p>Название проекта</p>
            </div>
            <div className={style.itemProject__text}>
                <p>Краткое описание</p>
            </div>
        </div>

    );
}

export default Project;