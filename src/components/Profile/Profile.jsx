import React from "react";
import s from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostsContainer from "./Posts/PostsContainer";

function Profile() {
    return (
        <div>
            <ProfileInfoContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;