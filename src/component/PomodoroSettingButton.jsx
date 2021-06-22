import React, { useState } from "react";
import style from "./Pomodoro.module.css";

function PomodoroSettingButton({ activeTabHandler, key, id, value }) {
  const [activeTab, setActiveTab] = useState(1);
  const [activeClass, setActiveClass] = useState(`${style.li}`);

  const currentTabHandler = (e) => {
    setActiveTab(e.target.id);
    activeTabHandler(e.target.id);
    console.log(e.target.id);

    // setActiveClass(`${style.li} ${style.active}`);
  };

  return (
    <>
      <button
        onClick={currentTabHandler}
        className={`${style.li} ${activeTab === id ? style.active : ""}`}
        key={key}
        id={id}
      >
        {value}
      </button>
    </>
  );
}

export default PomodoroSettingButton;
