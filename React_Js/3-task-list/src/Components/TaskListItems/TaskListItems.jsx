/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function TaskListItems(props) {
  const { nameTask, index, deleteTaskBtnHandler } = props;

  return (
    <li className="collection-item">
      {nameTask}
      <a className="delete-item secondary-content">
        <i
          className="fa fa-remove"
          onClick={() => deleteTaskBtnHandler(index)}
        ></i>
      </a>
    </li>
  );
}

export default TaskListItems;
