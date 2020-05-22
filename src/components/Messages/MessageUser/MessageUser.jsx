import React from "react";
import s from "./MessageUser.module.css";
import {NavLink} from "react-router-dom";

function MessageUser(props) {
    let path = "/messages/" + props.id;

    return (
        <div className={s.user}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

export default MessageUser;