import React from "react";
import s from "./Messages.module.css";
import MessageUser from "./MessageUser/MessageUser";
import Message from "./Message/Message";


function Messages(props) {

    let usersElements = props.users
        .map(u => <MessageUser name={u.name} id={u.id}/>)

    let messagesElements = props.messages
        .map(m => <Message user={m.user} text={m.text}/>)

    let textareaElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onTextAreaChange = () => {
        let text = textareaElement.current.value;
        props.textAreaChange(text);
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
                <textarea ref={textareaElement} onChange={onTextAreaChange} value={props.textAreaText}/>
                <input className="button" onClick={onSendMessage} type="button" value="Send"/>
            </div>
        </div>
    );
}

export default Messages;