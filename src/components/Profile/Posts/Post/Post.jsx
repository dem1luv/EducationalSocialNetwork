import React from "react";
import s from "./Post.module.css";

function Post(props) {
    return (
        <div className={s.item}>
            <div className={s.itemHeader}>
                <img src="https://i.pinimg.com/originals/98/f2/ab/98f2ab7ae505fb9eb3f9582f7a79e870.jpg" alt=""/>
            </div>
            <div className={s.itemBody}>
                <p>{props.text}</p>
            </div>
            <div className={s.itemStatistics}>
                likes: {props.likesCount}
            </div>
        </div>
    );
}

export default Post;