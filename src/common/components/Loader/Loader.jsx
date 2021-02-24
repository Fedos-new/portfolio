import React from "react";
import style from './Loader.module.scss'


export const Loader = ({active}) => {

    return (
        <div className={active ? `${style.circleWrap} ${style.active}` : style.circleWrap}
             onClick={(e) => e.stopPropagation()}>
            <div className={style.circle} >
            </div>
        </div>
    )
}
