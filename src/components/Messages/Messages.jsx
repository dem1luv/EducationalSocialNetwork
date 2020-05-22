import React from "react";
import s from "./Messages.module.css";
import MessageUser from "./MessageUser/MessageUser";
import Message from "./Message/Message";

function Messages(props) {

    let usersElements = props.store.state.messagesPage.users
        .map(u => <MessageUser name={u.name} id={u.id}/>)

    let messagesElements = props.store.state.messagesPage.messages
        .map(m => <Message user={m.user} text={m.text}/>)

    let textareaElement = React.createRef();

    let sendMessage = () => {
        let text = textareaElement.current.value;
        alert(text);
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
                <textarea ref={textareaElement}></textarea>
                <input className="button" onClick={sendMessage} type="button" value="Send"/>
            </div>
        </div>
    );
}

export default Messages;