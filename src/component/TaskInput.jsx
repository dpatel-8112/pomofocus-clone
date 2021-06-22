import React, { useState } from "react";
import TaskLists from "./TaskLists";
import style from "./Task.module.css";

function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const taskHandler = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <form>
        <input type="text" value={task} onChange={taskHandler} />
        <button type="submit" onClick={buttonHandler}>
          + Add task
        </button>
      </form>

      <ul className={style.ul}>
        {tasks.map((task) => (
          <TaskLists task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskInput;
