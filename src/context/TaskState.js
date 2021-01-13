import React, { createContext, useReducer } from 'react';
import TaskReducer from './TaskReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Faire mes devoirs',
      description: 'Exos 5 à 9 de la page 46 pour la trigo\nRédactions sur l\'impact des différents styles narratifs\nlol ;-p',
      subtasks: [
        {
          id: 1,
          task_id: 1,
          name: 'Exos de trigo',
          completed: false,
        },
        {
          id: 2,
          task_id: 1,
          name: 'Rédaction en français',
          completed: false,
        },
        {
          id: 3,
          task_id: 1,
          name: 'Dessiner le boule de la prod d\'espagnol',
          completed: true,
        },
      ]
    },
    {
      id: 2,
      name: 'Ranger ma chambre',
      description: 'C\'est le dawa !!!\nIl faut ranger quoi !',
      subtasks: [
        {
          id: 4,
          task_id: 2,
          name: 'Ranger mes BD',
          completed: true,
        },
        {
          id: 5,
          task_id: 2,
          name: 'Ranger mes DVD',
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

  const modifyTaskName = (id, newName) => {
    dispatch({
      type: 'MODIFY_TASK_NAME',
      payload: {id, newName},
    });
  }

  const modifyTaskDescription = (identifiant, newInfos) => {
    dispatch({
      type: 'MODIFY_TASK_DESCRIPTION',
      payload: {identifiant, newInfos},
    });
  }

  const addSubtask = (subtask) => {
    dispatch({
      type: 'ADD_SUBTASK',
      payload: subtask,
    });
  }

  const toogleSubtask = (subtask) => {
    dispatch({
      type: 'TOOGLE_SUBTASK',
      payload: subtask
    });
  }

  const eraseSubtask = (subtask) => {
    dispatch({
      type: 'DELETE_SUBTASK',
      payload: subtask
    });
  }

  return (
    <TaskContext.Provider value={{
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
    }}>
      {children}
    </TaskContext.Provider>
  );
};
