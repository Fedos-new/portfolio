import React from 'react';
import {Link} from "react-scroll";
import style from './Links.module.scss';


const Links = (props) => {

    const dataLinks = [
        {id: 1, linkTo: 'main', title: 'Главная'},
        {id: 2, linkTo: 'about', title: 'Обо мне'},
        {id: 3, linkTo: 'skills', title: 'Скиллы'},
        {id: 4, linkTo: 'projects', title: 'Проекты'},
        {id: 5, linkTo: 'contacts', title: 'Контакты'},
    ]

    return (
        <ul className={props.wrap}>
            {
                dataLinks.map(el =>
                    <li className={style.link} key={el.id}><Link
                        activeClass={style.active}
                        to={el.linkTo}
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={600}
                    >
                        {el.title}
                    </Link>
                    </li>)
            }
        </ul>

    );
}

export default Links;
