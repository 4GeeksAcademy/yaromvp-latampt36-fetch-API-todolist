import React, { useState, useEffect } from "react";

import { Title } from "./Title.jsx";
import { ToDoList } from "./ToDoList.jsx";
import { Bottom } from "./Bottom.jsx";

const Home = () => {

  //OBETENER TODOS LOS USUARIOS
  /*
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/todo/users')
      if (response.status !== 200) {
        console.log(error);
        return
      }
      const body = await response.json();
      setAllUsers(body.results)
      console.log("❌ getAllUsers", body);
      console.log("❌ getAllUsers", body.users[0]);
    } catch (error) {
      console.log(error);
    }
  }
  */



  useEffect(() => {
    //createUser()
  }, [])

  return (
    <div>
      <Title />
      <div className="border border-bottom-0 shadow-lg" style={{ width: "500px" }} >
        <ToDoList />
      </div>
      <Bottom />
    </div>

  );
};

export default Home;
