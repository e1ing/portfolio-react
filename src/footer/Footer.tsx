import React from 'react';
import style from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.title}>Elvira Kisling</h2>
                <div className={style.socialIcons}>
                    <span className={`$style.socialIcon`}></span>
                    <span> <FontAwesomeIcon icon={faPaperPlane}/> </span>
                    <span> <FontAwesomeIcon icon={faPaperPlane}/> </span>
                    <span> <FontAwesomeIcon icon={faPaperPlane}/> </span>
                </div>
                <span>
                    ©2021 All rights reserved
                </span>
            </div>
        </div>
    )
}

export default Footer;