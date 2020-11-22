import React, { useRef } from "react";
import "./useRef.css";
export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Su nombre"
        className="form-control"
      />
      <button onClick={handleClick} className="btn btn-outline-primary">
        Focus
      </button>
    </>
  );
};
