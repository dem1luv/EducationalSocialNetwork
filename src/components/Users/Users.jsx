import React from "react";
import s from "./Users.module.css";
import User from "./User/User";

function Users(props) {
    let users = props.users.map((u) => <User user={u}/>);

    return (
        <div>
            {users}
        </div>
    );
}

export default Users;