import React from 'react';
import style from './Main.module.scss';
import styleContainer from "../common/styles/Container.module.scss"
import main_photo from "../assets/image/main_photo.jpg"
function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <h2>Hi there</h2>
                    <h1>I am Elvira Kisling</h1>
                    <p>Frontend developer</p>
                </div>

                <div className={style.photo}><img src={main_photo}/></div>
            </div>

        </div>
    );
}

export default Main;
