import React from "react";
import {addPostActionCreator, changePostTextAreaActionCreator} from "../../../redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        textAreaText: state.profilePage.textAreaText,
    }
};

let mapDispatchToProps = dispatch => ({
    textAreaChange: text => {
        dispatch(changePostTextAreaActionCreator(text));
    },
    addPost: () => {
        dispatch(addPostActionCreator());
    },
});

let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;