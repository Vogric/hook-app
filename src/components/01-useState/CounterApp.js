import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2, counter3, counter4 } = counter;

  const handleSumBtn = () => {
    setCounter({
      ...counter,
      counter1: counter1 + counter2
    });
  };

  return (
    <>
      <h1>Counter App</h1>
      <hr />
      <h2>Counter 1 = {counter1} </h2>
      <h2>Counter 2 = {counter2} </h2>
      <h2>Counter 3 = {counter3} </h2>
      <h2>Counter 4 = {counter4} </h2>
      <button onClick={handleSumBtn} className="btn - btn-primary">
        +1
      </button>
    </>
  );
};
