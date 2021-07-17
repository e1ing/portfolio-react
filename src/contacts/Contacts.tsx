import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
function Contacts() {
    return (
        <div className ={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title text ={"Contacts"}/>
                <form className={style.contactForm} >
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
            <button type="submit" className={style.submitBtn}>Send</button>
        </div>
        </div>
    )
}

export default Contacts;
