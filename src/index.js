import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <ClickCounter />
    </div>
  );
}

function ClickCounter() {
  const [count, setCount] = useState(0);

  function handlePrev() {
    if (count > 0) setCount(count - 1);
  }

  function handleNext() {
    setCount(count + 1);
  }
  return (
    <div>
      <div className="container">
        <button className="btn" onClick={handlePrev}>
          -
        </button>
        <p>{count}</p>
        <button className="btn" onClick={handleNext}>
          +
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
