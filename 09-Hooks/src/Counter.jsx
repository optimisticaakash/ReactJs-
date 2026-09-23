import React from 'react'
import { useState } from "react";

const Counter = () => {
    const [value, setvalue] = useState(0);

    function IncreaseValue() {
      setvalue(value + 1);
    }

    function DecreaseValue() {
      setvalue(value - 1);
    }

    function Jumpby5() {
      setvalue(value + 5);
    }
  return (
    <div className=" min-h-screen flex flex-col items-center pt-10">
      <h1 className="px-16 py-7  w-fit bg-indigo-400 text-8xl rounded-full">
        {value}
      </h1>
      <div className="flex items-center">
        <button
          className="px-3 py-5 bg-amber-400  rounded-xl m-4"
          onClick={IncreaseValue}
        >
          Increase
        </button>
        <button
          className="px-3 py-5 bg-emerald-400  rounded-xl m-4"
          onClick={DecreaseValue}
        >
          Decrease
        </button>
        <button
          className="px-3 py-5 bg-green-500  rounded-xl m-4"
          onClick={Jumpby5}
        >
          Jump By 5
        </button>
        <button
          className="px-3 py-5 bg-fuchsia-400  rounded-xl m-4"
          onClick={() => {
            setvalue(0);
          }}
        >
          Reset to 0
        </button>
      </div>
    </div>
  );
}

export default Counter