import React from "react";
import s from "./Navbar.module.css";

function Navbar () {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item} href="#">Messages</a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href="#">Profile</a>
            </div>
            <div>
                <a className={s.item} href="#">Music</a>
            </div>
            <div>
                <a className={s.item} href="#">Videos</a>
            </div>
        </nav>
    );
}

export default Navbar;