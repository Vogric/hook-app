import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./memos.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  return (
    <>
      <h1>
        Memorize <Small value={counter} />
      </h1>
      <hr />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
    </>
  );
};
