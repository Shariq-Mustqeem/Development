/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import TaskListItems from "../TaskListItems/TaskListItems";

function TaskList(props) {
  const { taskFormList, deleteTaskBtnHandler } = props;

  return (
    <ul className="collection">
      {taskFormList.map((items, index) => (
        <TaskListItems
          nameTask={items}
          key={index}
          index={index}
          deleteTaskBtnHandler={deleteTaskBtnHandler}
        />
      ))}
    </ul>
  );
}

export default memo(TaskList);
