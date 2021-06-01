import React from 'react';
import style from './Header.module.css';
import Nav from "../navigation/Nav";

function Header() {
    return (
        <div className={style.header}>
           <Nav/>
        </div>
    );
}

export default Header;
