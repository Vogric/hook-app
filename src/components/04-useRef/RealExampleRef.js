import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./useRef.css";
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button onClick={() => setShow(!show)} className="btn btn-primary mt-5">
        Show/Hide
      </button>
    </>
  );
};
