import React from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";

function Messages () {
    return (
        <div className={s.messages}>
            <div className={s.usersItems}>
                <div className={s.user}>
                    <NavLink to="/messages/1">Dmytro</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/messages/2">Kuat</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/messages/3">Sanja</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/messages/4">Alexandr</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/messages/5">Jolyne</NavLink>
                </div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.message}>Hey what's up nigga?</div>
                <div className={s.message}>Fine bro and you?</div>
                <div className={s.message}>Nice</div>
            </div>
        </div>
    );
}

export default Messages;