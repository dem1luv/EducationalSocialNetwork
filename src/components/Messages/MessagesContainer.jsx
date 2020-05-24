import React from "react";
import {changeMessageTextareaActionCreator, sendMessageActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
    textAreaText: state.messagesPage.textAreaText,
});

const mapDispatchToProps = dispatch => ({
    sendMessage: () => {
        dispatch(sendMessageActionCreator());
    },
    textAreaChange: text => {
        dispatch(changeMessageTextareaActionCreator(text));
    },
});

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;