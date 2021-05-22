import React, { useState } from "react";
import "./App.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  );
}
