import React, { useState } from "react";
import PomodoroSettingButton from "./PomodoroSettingButton";
import style from "./Pomodoro.module.css";

function PomodoroSetting({ activeTabHandler, tabs }) {
  return (
    <div>
      <ul className={style.ul}>
        {tabs.map((tab) => (
          <PomodoroSettingButton
            activeTabHandler={activeTabHandler}
            key={tab.id}
            id={tab.id}
            value={tab.value}
          />
        ))}
      </ul>
    </div>
  );
}

export default PomodoroSetting;
