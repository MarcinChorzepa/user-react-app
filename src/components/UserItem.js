import React from "react";
import CardItem from "./CardItem";

import "./UserItem.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    console.log(props.id);
    props.deleteUser(props.id);
  };
  return (
    <CardItem className="user-item" >
      <li onClick={deleteHandler}>
      {props.children}
      </li>
     
    </CardItem>
  );
};

export default UserItem;
