import React from "react";
import s from "./User.module.css";

function User(props) {

    let onFollow = () => {
        props.user.follow(props.user.id);
    }

    return (
        <div className={s.user}>
            <img className={s.image} src={props.user.avaUrl} alt=""/>
            <div className={s.name}>{props.user.name}</div>
            <div className={s.country}>{props.user.country}</div>
            <div className={s.city}>{props.user.city}</div>
            <div className={s.description}>{props.user.description}</div>
        </div>
    );
}

export default User;