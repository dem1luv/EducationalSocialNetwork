import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {
    let postsElements = props.posts
        .map(p => <Post text={p.text} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;