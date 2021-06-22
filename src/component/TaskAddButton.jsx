import React, { useState } from "react";
import style from "./Task.module.css";
import TaskModal from "./TaskModal";

function TaskAddButton({ setTasksHandler }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button className={style.addButton} onClick={ModalHandler}>
        <span className={style.addButtonIcon}>+</span> Add Task
      </button>

      {isModalOpen && (
        <TaskModal
          ModalHandler={ModalHandler}
          setTasksHandler={setTasksHandler}
        />
      )}
    </div>
  );
}

export default TaskAddButton;
