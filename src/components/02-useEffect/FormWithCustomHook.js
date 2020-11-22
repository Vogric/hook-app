import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  return (
    <>
      <h1>FormWithCustomHook</h1>
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
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
