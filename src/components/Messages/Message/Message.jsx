import React from "react";
import s from "./Message.module.css";

function Message(props) {
    return (
        <div className={s.message}>
            <div className={s.user}>
                {props.user}
            </div>
            <p className={s.text}>
                {props.text}
            </p>
        </div>
    );
}

export default Message;