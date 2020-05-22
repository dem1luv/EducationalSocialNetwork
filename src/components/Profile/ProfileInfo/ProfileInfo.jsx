import React from "react";
import s from "./ProfileInfo.module.css";
import {addPostActionCreator, changeTextareaActionCreator} from "../../../redux/state";

function ProfileInfo(props) {
    let textAreaElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let textAreaChange = () => {
        let text = textAreaElement.current.value;
        props.dispatch(changeTextareaActionCreator(text));
    }

    return (
        <div>
            <div className={s.bgContainer}>
                <img src="https://avatanplus.com/files/resources/original/566ef3ad6fbb8151a167dd92.jpg" alt=""/>
            </div>
            <div className={s.user}>
                <div className={s.userBgContainer}>
                    <img src="https://i.pinimg.com/originals/98/f2/ab/98f2ab7ae505fb9eb3f9582f7a79e870.jpg" alt=""/>
                </div>
                <div>
                    <p>Dmytro Demjanenko</p>
                    <p>Sumy, Ukraine</p>
                </div>
            </div>
            <div className={s.public}>
                <div>
                    <textarea ref={textAreaElement} onChange={textAreaChange} value={props.state.profilePage.textAreaText}/>
                </div>
                <div>
                    <input className="button" onClick={addPost} type="button" value="Publish"/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;