import React, { useState } from "react";
import "./InputUser.css";
const InputUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [validToggle, setValidToggle] = useState(true);

    const newUser= {
      username: username,
      age: age,
      id:  Math.random(10).toString()
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(username==='' || age==='') {
          setValidToggle(false);
          return;
        }
        console.log(username + ' ' + age);

        props.addUser(newUser);
        setUsername("");
        setAge("");
    }

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
        setValidToggle(true);
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
        setValidToggle(true);
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`form-control ${!validToggle ? "invalid" : ""}`}>
        <label>username</label>
        <input type="text" onChange={onChangeUsername} value={username}></input>
        <input type="number" onChange={onChangeAge} value={age}></input>
      </div>
      <button type="submit" className="button">Create user</button>
    </form>
  );
};

export default InputUser;
