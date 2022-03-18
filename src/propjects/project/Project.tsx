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
            <div className={style.overlayStyle}> <img className={style.imageStyle} src={styleImg} alt={"image"}/></div>
            <div>
                <div className={style.link}>
                    <a className={style.a} href={linkUrl}> {/* on github link*/}
                        <h5 className={style.heading}>Details</h5>
                    </a>
                </div>
            </div>
        </div>

    )
}


