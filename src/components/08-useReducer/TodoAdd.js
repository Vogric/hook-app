import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h3 className="mb-4">Add TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="To learn..."
          className="form-control"
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-info mt-1 btn-block">
          Add
        </button>
      </form>
    </>
  );
};
