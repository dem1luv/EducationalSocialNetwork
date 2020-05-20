import React from "react";
import s from "./Header.module.css";

function Header () {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1024px-Vk_Logo.svg.png" alt=""/>
        </header>
    );
}

export default Header;