import React, { FC } from 'react';
import style from './Skill.module.scss';

type SkillType={
    title: string
    description: string
    styleIcon: {backgroundImage: string}
}
const Skill: FC<SkillType> = ({title,description,styleIcon}) => {
    return (
        <div className={style.skill}>

            <div className={style.icon} style={styleIcon}></div>
            <h3 className={style.skillTitle}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
}

export default Skill;
