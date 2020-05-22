import React from "react";
import s from "./Messages.module.css";
import MessageUser from "./MessageUser/MessageUser";
import Message from "./Message/Message";
import {changeMessageTextareaActionCreator, sendMessageActionCreator} from "../../redux/state";

function Messages(props) {

    let usersElements = props.state.messagesPage.users
        .map(u => <MessageUser name={u.name} id={u.id}/>)

    let messagesElements = props.state.messagesPage.messages
        .map(m => <Message user={m.user} text={m.text}/>)

    let textareaElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let textAreaChange = () => {
        let text = textareaElement.current.value;
        props.dispatch(changeMessageTextareaActionCreator(text));
    }

    return (
        <div className={s.messages}>
            <div className={s.usersItems}>
                {usersElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
            <div className={s.sendContainer}>
                <textarea ref={textareaElement} onChange={textAreaChange} value={props.state.messagesPage.textAreaText}/>
                <input className="button" onClick={sendMessage} type="button" value="Send"/>
            </div>
        </div>
    );
}

export default Messages;