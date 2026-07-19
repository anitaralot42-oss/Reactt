import React, { useState } from "react";
import { useRef } from "react";

const Useref = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = () => {
    console.log(inputRef.current.value);
    setValue(inputRef.current.value);
  };
  return (
    <>
      <input type="text" ref={inputRef} onChange={handleChange}></input>
      <h1>Accesing data :{value}</h1>
    </>
  );
};

export default Useref;
