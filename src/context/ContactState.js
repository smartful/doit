import React, { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';

const initialState = {
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
  currentContact: {},
};

export const ContactContext = createContext(initialState);

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const getCurrentContact = (id) => {
    dispatch({
      type: 'GET_CURRENT_CONTACT',
      payload: id,
    });
  }

  const addContact = (contact) => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: contact,
    });
  }

  const deleteContact = (id) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    });
  }

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      addContact,
      deleteContact,
      currentContact: state.currentContact,
      getCurrentContact,
    }}>
      {children}
    </ContactContext.Provider>
  );
}