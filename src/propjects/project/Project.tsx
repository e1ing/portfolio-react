import React, {FC} from 'react';
import style from './Project.module.scss'

type ProjectType = {
    projectTitle: string,
    projectDescription: string,
    linkUrl: string,
    styleImg: string
}

export const Project: FC<ProjectType> = ({styleImg, projectTitle, projectDescription, linkUrl}) => {
    return (

        <div className={style.wrapper}>
            <div className={style.boxImg}>
                <img className={style.imageStyle} src={styleImg} alt={"image"}/>
               <div className={style.container}>
                <a className={style.link} href={linkUrl}> {/* on github link*/}
                    <h5 className={style.heading}>Details</h5>
                </a>
               </div>
            </div>

        </div>

    )
}


