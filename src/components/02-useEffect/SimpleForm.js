import React, { useState, useEffect } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("useEffect del componente gral");
  }, []);

  useEffect(() => {
    // console.log("useEffect Formulario");
  }, [formState]);

  useEffect(() => {
    // console.log("useEffect name");
  }, [name]);

  useEffect(() => {
    // console.log("useEffect Email");
  }, [email]);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre: " + name + " Email: " + email);
  };

  return (
    <>
      <h1>useEffect: SimpleForm</h1>
      <hr />
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {name === "Montado" && <Message />}
    </>
  );
};
