import React from 'react';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import gitIcon from "../assets/image/git_icon_bk.png";
import jsIcon from "../assets/image/js_icon_bk.png";
import cssIcon from "../assets/image/css_icon_bk.png";
import reactIcon from "../assets/image/react_icon_bk.png";
import reduxIcon from "../assets/image/redux_icon_bk.png";
import axiosIcon from "../assets/image/axios_icon.png";
import sassIcon from "../assets/image/sass_icon_bk.png";

function Skills() {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={style.сontainer}>
                <Title text ={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JavaScript"} styleIcon={{backgroundImage: `url(${jsIcon})`}} description="JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much ..."/>
                    <Skill title={"React"} styleIcon={{backgroundImage: `url(${reactIcon})`}} description={"React is the entry point to the React library. If you load React from a tag, these top-level APIs are available on the React global."}/>
                    <Skill title={"Redux"} styleIcon={{backgroundImage: `url(${reduxIcon})`}} description={"Redux is open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces."}/>
                    <Skill title={"Axios"} styleIcon={{backgroundImage: `url(${axiosIcon})`}} description={"is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API."}/>
                    <Skill title={"CSS"} styleIcon={{backgroundImage: `url(${cssIcon})`}} description={"CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups ..."}/>
                    <Skill title={"Sass"} styleIcon={{backgroundImage: `url(${sassIcon})`}} description={"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."}/>
                    <Skill title={"Git"} styleIcon={{backgroundImage: `url(${gitIcon})`}} description={"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.\n"}/>
                </div>
            </div>
        </div>
        /*промапить скиллы потом*/
    );
}

export default Skills;
