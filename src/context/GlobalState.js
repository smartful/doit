import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  tasks: [
    {
      name: 'Faire mes devoirs',
      completed: false
    },
    {
      name: 'Ranger ma chambre',
      completed: false
    },
  ],
  contacts: [
    {
      firstName: 'Petit',
      lastName: 'NOUNOURS',
      tel: '06 66 66 66 69',
      email: 'petit.nounours@worldcompany.com',
    },
    {
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

  return (
    <GlobalContext.Provider value={{
      tasks: state.tasks,
      contacts: state.contacts,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
