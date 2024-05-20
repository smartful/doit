import React, { createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer.js";

// const test = JSON.parse(localStorage.getItem('tasks'));
// console.log(test);

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) ?? [],
  currentTask: {},
};

export const TaskContext = createContext(initialState);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getCurrentTask = (id) => {
    dispatch({
      type: "GET_CURRENT_TASK",
      payload: id,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const modifyTaskName = (id, newName) => {
    dispatch({
      type: "MODIFY_TASK_NAME",
      payload: { id, newName },
    });
  };

  const modifyTaskDescription = (identifiant, newInfos) => {
    dispatch({
      type: "MODIFY_TASK_DESCRIPTION",
      payload: { identifiant, newInfos },
    });
  };

  const addSubtask = (subtask) => {
    dispatch({
      type: "ADD_SUBTASK",
      payload: subtask,
    });
  };

  const toogleSubtask = (subtask) => {
    dispatch({
      type: "TOOGLE_SUBTASK",
      payload: subtask,
    });
  };

  const eraseSubtask = (subtask) => {
    dispatch({
      type: "DELETE_SUBTASK",
      payload: subtask,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        currentTask: state.currentTask,
        getCurrentTask,
        modifyTaskName,
        modifyTaskDescription,
        addSubtask,
        toogleSubtask,
        eraseSubtask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
