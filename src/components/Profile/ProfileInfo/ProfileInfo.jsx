import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";

function Profile () {
    return (
        <div>
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
                Search
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="button" value="Search It"/>
                </div>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;