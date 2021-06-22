import "./App.css";
import NavBar from "./component/NavBar";
import Pomodoro from "./component/Pomodoro";
import Task from "./component/Task";
import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("");

  const bgColorHandler = (newBgColor) => {
    setBgColor(newBgColor);
  };
  return (
    <div style={{ backgroundColor: `${bgColor}` }} className="App">
      <NavBar />
      <Pomodoro bgColorHandler={bgColorHandler} />
      <Task />
    </div>
  );
}

export default App;
