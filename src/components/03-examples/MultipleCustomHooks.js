import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./examples.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { data, loading, error } = state;

  const { author, quote } = !!data && data[0];

  console.log(state);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      {error && (
        <div className="alert alert-danger text-center">
          An error was happendd
        </div>
      )}
      <button className="btn btn-info" onClick={decrement}>
        Back quote
      </button>
      <button className="btn btn-info" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
