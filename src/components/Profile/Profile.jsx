import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div>
            <ProfileInfo store={props.store}/>
            <Posts store={props.store}/>
        </div>
    );
}

export default Profile;