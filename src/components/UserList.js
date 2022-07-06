import React from "react";
import UserItem from "./UserItem";

const UserList = props => {
    return (
        <div>
            {props.usersData.map(user=>{
                return <UserItem key={user.id} id={user.id} deleteUser={props.deleteItem} >{user.username + ' ' + user.age.toString()} </UserItem>
            })}
        </div>
    )
}

export default UserList;