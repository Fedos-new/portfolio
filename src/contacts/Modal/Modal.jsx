import React from "react";
import style from './Modal.module.scss'


export const Modal = ({active, setActive, children}) => {


    return (
        <div
            className={active ? `${style.modal} ${style.active}` : style.modal}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${style.modalContent} ${style.active}` : style.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
