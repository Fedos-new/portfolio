import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Button} from '../common/components/Button/Button';


export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Всем привет</span>
                    <div>
                        <h1>Роман Федосов</h1>
                    </div>
                    <Button name={"Узнать больше"} styleExtra={style.btnLearnMore}/>
                </div>

            </div>
        </div>
    );
}
