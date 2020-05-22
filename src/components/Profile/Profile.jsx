import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div>
            <ProfileInfo state={props.state} dispatch={props.dispatch}/>
            <Posts state={props.state}/>
        </div>
    );
}

export default Profile;