import React from "react";
import s from "./Header.module.css";

function Header () {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png" alt=""/>
        </header>
    );
}

export default Header;