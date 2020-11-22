import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, []);

  const { counter, increment, decrement } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { data } = state;

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-info" onClick={decrement}>
        Back quote
      </button>
      <button className="btn btn-info" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
