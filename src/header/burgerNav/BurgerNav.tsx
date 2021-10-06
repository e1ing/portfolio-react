import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function BurgerNav() {
    let [menuIsOpen, setBurgerMenu] = useState(false);
    let onBurgerBtnClick = () => {
       setBurgerMenu(!menuIsOpen);
    };
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ?
                `${style.burgerNavItems} ${style.show}`
                : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to={"main"}
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
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </div>

    );
}

export default BurgerNav;
