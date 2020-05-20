import React from "react";
import s from "./Posts.module.css";

function Posts () {
    return (
        <div className={s.profile}>
            <div className={s.bg_container}>
                <img src="https://avatanplus.com/files/resources/original/566ef3ad6fbb8151a167dd92.jpg" alt=""/>
            </div>
            <div className={s.user}>
                <img src="https://i.pinimg.com/originals/98/f2/ab/98f2ab7ae505fb9eb3f9582f7a79e870.jpg" alt=""/>
                <div>
                    user info
                </div>
            </div>
            <div>
                search
                <div>
                    search button
                </div>
            </div>
            <div>
                posts
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Posts;