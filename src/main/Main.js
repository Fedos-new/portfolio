import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Button} from '../common/components/Button/Button';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const particlesOpt =  {
    "particles": {
        "number": {
            "value": 6,
            "density": {
                "enable": true,
                "value_area": 800
            }

        },
        "move": {
            "speed": 0,
            "out_mode": "out",
            "bounce": "true",
            "random":false,
            "straight":true,
            "attract":{"enable":true,"rotateX":1200,"rotateY":1200}
        },
        "shape": {
            "type":"square",
        },
        "color": {
            "value": ["#0e5a2c","#a55859", "#176ba0"]
        },
        "polygon":{"nb_sides":5},
        "opacity": {
            "value": 0.431212121122,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 200,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0,
                "size_min": 0.9,
                "sync": false
            }
        }
    },

    "retina_detect": true
}

export const Main = () => {



    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
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
                    <Button name={"Узнать больше"} styleExtra={style.btnLearnMore}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
