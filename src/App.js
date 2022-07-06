import "./App.css";
import React, { useState } from "react";
import UserList from "./components/UserList";
import CardItem from "./components/CardItem";
import InputUser from "./components/InputUser";
const DUMMY_USERS = [
  {
    id: "first1",
    username: "Max",
    age: 31,
  },
  {
    id: "second2",
    username: "Bob",
    age: 42,
  },
]
function App() {
  const [listOfUsers, setListOfUsers] = useState(DUMMY_USERS);

  const addUserHandler = (newUser) => {
    setListOfUsers((prevUsers)=>{
      return [newUser,...prevUsers];
    })
  };

  const onDeleteItemHandler = userId => {
    setListOfUsers((prevUsers)=>{
      const updatedUsers = listOfUsers.filter(x=>x.id!==userId);
      return updatedUsers;
    })
  }

  return (
    <div>
      <CardItem className="user-form" >
        <InputUser addUser={addUserHandler}/>
      </CardItem>

      <CardItem className="users">
        <UserList usersData={listOfUsers} deleteItem={onDeleteItemHandler}/>
      </CardItem>
    </div>
  );
}

export default App;
