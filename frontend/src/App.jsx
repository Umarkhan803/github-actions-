import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setData(data.message);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleIncrease = () => {
    fetch("http://localhost:3000/api/counter/increase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ counter: counter }),
    })
      .then((response) => response.json())
      .then((data) => setCounter(data.counter));
  };
  const handleDecrease = () => {
    fetch("http://localhost:3000/api/counter/decrease", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ counter: counter }),
    })
      .then((response) => response.json())
      .then((data) => setCounter(data.counter));
  };
  const handleReset = () => {
    fetch("http://localhost:3000/api/counter/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ counter: counter }),
    })
      .then((response) => response.json())
      .then((data) => setCounter(data.counter));
  };

  return (
    <>
      <h1>Hello from frontend</h1>
      <h1>{data}</h1>

      <div className="container">
        <h1 className="counter">{counter}</h1>
        <div className="buttons">
          <button className="increase-button" onClick={handleIncrease}>
            Increase
          </button>
          <button className="decrease-button" onClick={handleDecrease}>
            Decrease
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
