import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  function handleButtonTask() {
    setUser({
      ...user,
      id: 123,
      nombre: "Fernando",
    });
  }
  return (
    <>
      <h1>LoginScreen WIP</h1>
      <hr />

      <button onClick={handleButtonTask} className="btn btn-primary">
        Click to complete the task
      </button>
    </>
  );
};
