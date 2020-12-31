import React, { createContext, useReducer } from 'react';
import TaskReducer from './TaskReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Faire mes devoirs',
      subtasks: [
        {
          id: 1,
          name: 'Exos de trigo',
          completed: false,
        },
        {
          id: 2,
          name: 'Rédaction en français',
          completed: false,
        },
        {
          id: 3,
          name: 'Dessiner le boule de la prod d\'espagnol',
          completed: true,
        },
      ]
    },
    {
      id: 2,
      name: 'Ranger ma chambre',
      subtasks: [
        {
          id: 4,
          name: 'Ranger mes BD',
          completed: true,
        },
        {
          id: 5,
          name: 'Ranger le reste',
          completed: false,
        },
      ]
    },
  ],
  currentTask: {},
};

export const TaskContext = createContext(initialState);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getCurrentTask = (id) => {
    dispatch({
      type: 'GET_CURRENT_TASK',
      payload: id,
    });
  }

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  }

  // const addSubtask = (subtask) => {
  //   dispatch({
  //     type: 'ADD_SUBTASK',
  //     payload: subtask,
  //   });
  // }

  return (
    <TaskContext.Provider value={{
      tasks: state.tasks,
      addTask,
      deleteTask,
      currentTask: state.currentTask,
      getCurrentTask,
    }}>
      {children}
    </TaskContext.Provider>
  );
};