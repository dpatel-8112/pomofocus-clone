import React, { useState } from "react";
import style from "./Task.module.css";

function TaskModal({ ModalHandler, setTasksHandler }) {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [est, setEst] = useState(0);

  const saveTaskHandler = (e) => {
    e.preventDefault();
    // console.log(`Modal - ${task}`);
    setTasksHandler(task);
    ModalHandler();
  };

  const cancelTaskHandler = () => {
    setTask("");
    ModalHandler();
  };

  return (
    <div>
      <div className={style.modal}>
        <input
          type="text"
          className={style.taskHeading}
          placeholder="What are you working on?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className={style.estPomodoro}>Est Pomodoro</div>
        <input
          type="text"
          min={0}
          className={style.estPomodoroInput}
          value={est}
          onChange={(e) => setEst(e.target.value)}
        />
        <div
          onClick={() => setEst((preState) => preState + 1)}
          className={style.estPomodoroIncrement}
        >
          +
        </div>
        <div
          onClick={() => setEst((preState) => preState - 1)}
          className={style.estPomodoroDecrement}
        >
          -
        </div>

        <div className={style.addNote}>+ Add Note</div>

        <div className={style.noteContainer}>
          <textarea
            onChange={(e) => setNote(e.target.value)}
            value={note}
            rows="3"
            placeholder="Some Notes..."
          ></textarea>
        </div>

        <div className={style.taskButtonContainer}>
          <button
            onClick={cancelTaskHandler}
            className={style.taskButtonCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={saveTaskHandler}
            className={style.taskButtonSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
