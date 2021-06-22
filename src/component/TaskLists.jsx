import React from "react";
import style from "./Task.module.css";

function TaskLists({ task }) {
  return (
    <>
      {task && (
        <li className={style.li}>
          <span>{task}</span>
          <div
            className={style.dropdown}
            style={{
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.25)",
              marginRight: "4px",
            }}
          >
            <span>...</span>
          </div>
        </li>
      )}
    </>
  );
}

export default TaskLists;
