import React, { useState } from "react";
import PomodoroSetting from "./PomodoroSetting";
import PomodoroTime from "./PomodoroTime";
import style from "./Pomodoro.module.css";

function Pomodoro({ bgColorHandler }) {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      value: "Pomodoro",
      bgColor: "rgb(219, 82, 77)",
    },
    {
      id: 2,
      value: "Short Break",
      bgColor: "rgb(70, 142, 145)",
    },
    {
      id: 3,
      value: "Long Break",
      bgColor: "rgb(67, 126, 168)",
    },
  ];

  const activeTabHandler = (newActiveTab) => {
    setActiveTab(newActiveTab);
    bgColorHandler(tabs[newActiveTab - 1].bgColor);
    console.log(newActiveTab);
  };

  return (
    <div className={style.container}>
      <PomodoroSetting activeTabHandler={activeTabHandler} tabs={tabs} />
      {activeTab == 1 && <PomodoroTime initialMinute={25} />}
      {activeTab == 2 && <PomodoroTime initialMinute={5} />}
      {activeTab == 3 && <PomodoroTime initialMinute={15} />}
    </div>
  );
}

export default Pomodoro;
