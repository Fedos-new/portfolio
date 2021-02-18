import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import {particlesSetting} from "./particlesSetting";
import {Link} from "react-scroll";


export const Main = () => {


    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesSetting}/>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.text}>
                        <ReactTypingEffect
                            speed={80}
                            eraseSpeed={30}
                            eraseDelay={3000}
                            text={["I'm frontend developer", "Я фронтенд разработчик",]}
                        />
                        <div>
                            <h1>Роман Федосов</h1>
                        </div>
                        <div>
                            <button className={style.btnLearnMore}
                            >
                                <Link
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Узнать Больше
                                </Link>
                            </button>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>
    );
}
