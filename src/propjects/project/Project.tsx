import React from 'react';
import style from './Project.module.css'

type ProjectType = {

    projectTitle: string,
    projectDescription: string,
    linkUrl: string,
}

export function Project(props: ProjectType) {
    return (
        <div className={style.project}>

            <div className={style.container}>
                <div className={style.imgContainer}>
                    <a href={props.linkUrl} className={style.link}>Details</a>
                </div>
                <div className={style.projectTitle}>
                    {props.projectTitle}
                </div>

                <div className={style.projectDescription}>
                    {props.projectDescription}
                </div>

            </div>
        </div>
    )
}