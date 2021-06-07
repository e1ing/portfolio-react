import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
function Contacts() {
    return (
        <div className ={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form} >
                    <input className={style.name}></input>
                    <input className={style.email}></input>
                    <textarea className={style.message}></textarea>
                </form>
            <button className={style.btn}>Send</button>
        </div>
        </div>
    )
}

export default Contacts;
