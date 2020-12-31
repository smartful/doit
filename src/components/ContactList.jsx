import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactState';
import Contact from './Contact';
import AddContact from './AddContact';

function ContactList() {
  const { contacts } = useContext(ContactContext);
  const contactStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

  const blockStyle = {
    marginTop: '10px',
    marginBottom: '10px',
  }

  return (
    <div style={blockStyle}>
      <div style={contactStyle}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            tel={contact.tel}
            email={contact.email}
          />
        ))}
      </div>
      <AddContact />
    </div>
  );
}

export default ContactList;