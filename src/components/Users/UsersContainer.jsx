import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch.follow(followAC(userId));
    },
    unfollow: (userId) => {
        dispatch.unfollow(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch.setUsers(setUsersAC(users));
    },
});

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;