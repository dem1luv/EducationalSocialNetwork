import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    posts: state.profilePage.posts,
})

const mapDispatchToProps = dispatch => ({});

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;