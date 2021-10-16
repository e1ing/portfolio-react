import React, {FC} from 'react';
import style from './Project.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

type ProjectType = {
    projectTitle: string,
    projectDescription: string,
    linkUrl: string,
    styleImg: string
}

export const Project: FC<ProjectType> = ({styleImg, projectTitle, projectDescription, linkUrl}) => {
    return (
        <div className={style.project}>
            <img className={style.imageStyle} src={styleImg} alt={"image"}/>
            <div  className={style.overlayStyle}>

                <span className={style.horizontal}></span>
                <span className={style.vertical}></span>
                <div className={style.link}>
                    <a className={style.a} href={styleImg}> {/*change on github link*/}
                            <FontAwesomeIcon icon={faCrosshairs} style={{color: "#eee"}}/>
                    </a>
                    <p className={style.heading}>Details</p>
                </div>
            </div>
        </div>



        /*<div className={style.project} style={styleImg}>
            <div className={style.imgContainer}>
                <a href={linkUrl} className={style.link}>Details</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{projectTitle}</h3>
                <div className={style.projectDescription}>{projectDescription}</div>
            </div>
        </div>*/
    )
}


