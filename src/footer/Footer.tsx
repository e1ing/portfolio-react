import React from 'react';
import style from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faPaperPlane, faShoppingCart, faStop} from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.title}>Elvira Kisling</h2>
                <div className={style.socialIcons}>
                    <span className={style.iconStyle}> <FontAwesomeIcon icon={faPaperPlane}/> </span>
                    <span className={style.iconStyle}> <FontAwesomeIcon icon={faShoppingCart}/> </span>
                    <span className={style.iconStyle}> <FontAwesomeIcon icon={faStop}/> </span>
                    <span className={style.iconStyle}> <FontAwesomeIcon icon={faExclamationCircle}/> </span>
                </div>
                <span>
                    ©2021 All rights reserved
                </span>
            </div>
        </div>
    )
}

export default Footer;