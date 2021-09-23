import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.scss"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Elvira Kisling</h2>
                <div className={`${styleContainer.container} ${style.socialIcons}`}>
                    <div className={style.socialIcon}>Telegram</div>
                    <div className={style.socialIcon}>Pinterest</div>
                    <div className={style.socialIcon}>LinkedIn</div>
                    <div className={style.socialIcon}>Facebook</div>
                </div>
                <span>
                    ©2021 All rights reserved
                </span>
            </div>
        </div>
    )
}

export default Footer;