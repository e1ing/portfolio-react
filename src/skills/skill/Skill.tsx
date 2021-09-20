import React, { FC } from 'react';
import style from './Skill.module.scss';

type SkillType={
    title: string
    description: string
}
const Skill: FC<SkillType> = ({title,description}) => {
    return (
        <div className={style.skill}>

            <div className={style.icon}></div>
            <h3 className={style.skillTitle}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
}

export default Skill;
