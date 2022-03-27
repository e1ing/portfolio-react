import React, {FC} from 'react';
import style from './Project.module.scss'

type ProjectType = {
    projectTitle: string,
    linkUrl: string,
    styleImg: string
}

export const Project: FC<ProjectType> = ({styleImg, projectTitle, linkUrl}) => {
    return (

        <div className={style.wrapper}>
            <div className={style.boxImg}>
                <img className={style.imageStyle} src={styleImg} alt={"image"}/>
                <div className={style.container}>
                    <div className={style.text}>
                        <h1 className={style.projTitle}>{projectTitle}</h1>
                        <a className={style.btn} href={linkUrl}> </a>
                    </div>
                </div>
            </div>

        </div>

    )
}


