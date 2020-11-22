import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({
      
    })
  }

  return (
    <>
      <h1>AboutScreen WIP</h1>
      <hr />
      <pre> {JSON.stringify(user, null, 3)} </pre>
      <button onClick={handleLogout}  className="btn btn-warning">Logout</button>
    </>
  );
};
