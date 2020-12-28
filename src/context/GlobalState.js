import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Faire mes devoirs',
      completed: false
    },
    {
      id: 2,
      name: 'Ranger ma chambre',
      completed: false
    },
  ],
  contacts: [
    {
      id: 1,
      firstName: 'Petit',
      lastName: 'NOUNOURS',
      tel: '06 66 66 66 69',
      email: 'petit.nounours@worldcompany.com',
    },
    {
      id: 2,
      firstName: 'Manu',
      lastName: 'MACRON',
      tel: '06 11 11 22 22',
      email: 'manu.macron@worldcompany.com',
    },
  ],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'ADD_TASK',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{
      tasks: state.tasks,
      addTask,
      deleteTask,
      contacts: state.contacts,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
