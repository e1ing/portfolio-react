import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Elya</h2>
                <div className={`${styleContainer.container} ${style.links}`}>
                    <span>Telegram</span>
                    <span>Pinterest</span>
                    <span>LinkedIn</span>
                    <span>Facebook</span>
                </div>
                <div>
                    ©2021 All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;