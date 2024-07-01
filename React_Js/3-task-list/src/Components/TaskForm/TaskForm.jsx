import React, { memo } from "react";
import { saveLocalStrongeTask } from "../../App";

function TaskForm(props) {
  const { taskFormList, setTaskFormList, taskInput, setTaskInput } = props;

  function addTaskButtonHandler(e) {
    e.preventDefault();
    if (!taskInput) {
      return alert("Please enter a task");
    }
    const tempTask = [...taskFormList];
    tempTask.push(taskInput);
    saveLocalStrongeTask(tempTask)
    setTaskFormList(tempTask);
    setTaskInput("");
  }
  return (
    <form id="task-form" onSubmit={addTaskButtonHandler}>
      <div className="input-field col s12">
        <input
          type="text"
          name="task"
          id="task"
          onChange={(e) => setTaskInput(e.target.value)}
          value={taskInput}
        />
        <label>new task</label>
      </div>
      <button className="waves-effect waves-light btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default memo(TaskForm);
