import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";


function Nav() {
    return (
        <ul className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                offset={1}
                duration={500}
            > Main </Link>
            <Link
                activeClass={style.active}
                to={"skills"}
                spy={true}
                offset={1}
                duration={500}
            > Skills </Link>

            <Link
                activeClass={style.active}
                to={"projects"}
                spy={true}
                offset={1}
                duration={500}
            > Projects </Link>
            <Link
                activeClass={style.active}
                to={"contacts"}
                spy={true}
                offset={1}
                duration={500}
            > Contacts </Link>
        </ul>



    );
}

export default Nav;
