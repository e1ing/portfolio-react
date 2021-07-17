import React, {FC} from 'react';
import style from './Project.module.scss'

type ProjectType = {
    projectTitle: string,
    projectDescription: string,
    linkUrl: string,
    styleImg: {backgroundImage: string}
}

export const Project: FC<ProjectType> = ({styleImg, projectTitle, projectDescription, linkUrl}) => {
    return (
        <div className={style.project} style={styleImg}>
            <div className={style.imgContainer} style={style}>
                <a href={linkUrl} className={style.link}>Details</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{projectTitle}</h3>
                <div className={style.projectDescription}>{projectDescription}</div>
            </div>
        </div>
    )
}