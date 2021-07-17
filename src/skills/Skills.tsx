import React from 'react';
import style from './Skills.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text ={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JavaScript"} description="JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much ..."/>
                    <Skill title={"CSS"} description={"CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups ..."}/>
                    <Skill title={"React"} description={"React is the entry point to the React library. If you load React from a tag, these top-level APIs are available on the React global."}/>
                </div>

            </div>
        </div>
        /*промапить скиллы потом*/
    );
}

export default Skills;
