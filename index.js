import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <React.Fragment>
      <button onClick={increment}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
    </React.Fragment>
  );
}

var root = document.getElementById("app");
ReactDOM.render(<Counter />, root);