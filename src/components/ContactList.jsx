import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Contact from './Contact';

function ContactList() {
  const { contacts } = useContext(GlobalContext);

  return (
    <div>
      {contacts.map(contact => (
        <Contact
          firstName={contact.firstName}
          lastName={contact.lastName}
          tel={contact.tel}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default ContactList;