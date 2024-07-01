/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";

const localStorageKey = "Task";
export const saveLocalStrongeTask = (array) => {
  localStorage.setItem(localStorageKey, JSON.stringify(array));
};

export const getLocalStrongeTask = () => {
  return JSON.parse(localStorage.getItem(localStorageKey));
};

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskFormList, setTaskFormList] = useState([]);
  const [filterTask, setFilterTask] = useState("");

  const deleteTaskBtnHandler = (index) => {
    const tempTask = [...taskFormList];
    tempTask.splice(index, 1);
    saveLocalStrongeTask(tempTask);
    setTaskFormList(tempTask);
  };

  const clearTaskbtnHandler = (e) => {
    e.preventDefault();
    saveLocalStrongeTask([]);
    setTaskFormList([]);
  };

  const filterTaskHandler = (e) => {
    const filterTaskInput = e.target.value;
    setFilterTask(filterTaskInput);
  };
  const filterTaskInputValue = taskFormList.filter((singleSerach) =>
    singleSerach.toLowerCase().includes(filterTask)
  );

  useEffect(() => {
    const localStorageGetItemList = getLocalStrongeTask();
    setTaskFormList(localStorageGetItemList);
  }, []);
  // console.log(filterTask, "filter");
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title"> Task List </span>
              <div className="row">
                <TaskForm
                  taskInput={taskInput}
                  setTaskInput={setTaskInput}
                  setTaskFormList={setTaskFormList}
                  taskFormList={taskFormList}
                />
              </div>
            </div>
            <div className="card-action">
              <h5 id="task-title">Tasks</h5>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  onChange={filterTaskHandler}
                  value={filterTask}
                />
                <label>Filter Task</label>
              </div>
              <TaskList
                taskFormList={filterTaskInputValue}
                deleteTaskBtnHandler={deleteTaskBtnHandler}
              />
              <a
                href="/"
                className="clear-tasks btn black"
                onClick={clearTaskbtnHandler}
              >
                Clear Task
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
