import React from 'react';
import style from './Footer.module.scss'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.title}>Elvira Kisling</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>Telegram</div>
                    <div className={style.socialIcon}>Pinterest</div>
                    <div className={style.socialIcon}><i  className="fab fa-linkedin-in"></i></div>
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