import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    imageUrl: string,
    imageText: string,
    projectTitle: string,
    projectDescription: string,
}

export function Project(props: ProjectType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <img className={style.imgStyle} src={props.imageUrl} alt={props.imageText}></img>
                <button className={style.btnStyle}>Details</button>
            </div>
            <div className={style.text}>
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