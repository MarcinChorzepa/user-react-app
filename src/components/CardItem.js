import React from "react";
import "./CardItem.css";

const CardItem = (props) => {

  return <div className={`card-item ${props.className}`} >{props.children}</div>;
};

export default CardItem;
