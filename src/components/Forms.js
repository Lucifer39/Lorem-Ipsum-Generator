import React, { useEffect } from "react";
import { useState } from "react";
import text from "../data";

const Forms = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    var temp = [];
    var i = 0;
    text.map((ele) => {
      if (i < number) {
        temp.push(ele);
      }

      ++i;
    });

    setData(temp);
  };

  return (
    <div className="card">
      <h1>Lorem Ipsum Generator</h1>
      <form>
        <input
          type="number"
          min="0"
          max="9"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Generate
        </button>
      </form>
      <div>
        {data.map((ele) => {
          return <p>{ele}</p>;
        })}
      </div>
    </div>
  );
};

export default Forms;
