import React from 'react';
import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <div>
            <a className={`${style.btnOutline} 
                ${props.styleExtra}`}
                href={props.href}
               download={props.download}
            >
                {props.name}
            </a>
        </div>

    );
}
