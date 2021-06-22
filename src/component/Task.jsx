import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskLists from "./TaskLists";
import style from "./Task.module.css";
import TaskAddButton from "./TaskAddButton";

function Task() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const taskDropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setTasksHandler = (newTask) => {
    console.log(`Task - ${newTask}`);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={style.container}>
      <div className={style.taskText1}>Time to Work!</div>
      <div className={style.taskText2}>Tasks</div>
      <div className={style.dropdown} onClick={taskDropdownHandler}>
        <span>...</span>
        <div
          className={`${style.dropdownContent} ${
            isDropdownOpen ? style.active : ``
          }`}
        >
          <li className={style.li}>Clear Finished Tasks</li>
        </div>
      </div>
      <div className={style.divider} />

      <TaskAddButton setTasksHandler={setTasksHandler} />

      <ul className={style.ul}>
        {/* <TaskInput /> */}
        {tasks.map((task) => (
          <TaskLists task={task} />
        ))}
      </ul>
    </div>
  );
}

export default Task;
