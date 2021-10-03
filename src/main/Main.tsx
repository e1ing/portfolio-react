import React from 'react';
import style from './Main.module.scss';
import main_photo from "../assets/image/main_photo.jpg";
import Particles from 'react-particles-js';
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

function Main() {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade cascade>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi there,</span>
                        <span>I am Elvira Kisling</span>
                        <ReactTypingEffect text={"Frontend developer"}/>
                    </div>

                    <Tilt className={"Tilt"}>
                        <div className={style.photo}>
                        <div className={style.image}>
                        </div>
                        </div>
                    </Tilt>
                </div>
            </ Fade>
        </div>
    );
}

export default Main;
