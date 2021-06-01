import React from 'react';
import styleContainer from "./../common/styles/Container.module.css"
import style from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styleContainer.container}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.form}>
                <input className={style.name}></input>
                <input  className={style.email}></input>
                <textarea  className={style.message}></textarea>
            </form>

        </div>
    )
}

export default Contacts;
