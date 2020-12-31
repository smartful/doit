import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactContext } from '../context/ContactState';

function ContactPanel() {
  const { getCurrentContact, currentContact } = useContext(ContactContext);
  console.log('ContactContext : ', ContactContext);
  console.log('getCurrentContact : ', getCurrentContact);
  const { id } = useParams();

  useEffect(() => {
    getCurrentContact(id);
  }, [id]);

  const panelStyle = {
    textAlign: 'left',
    width: '60%',
    padding: '10px',
    border: '6px solid black',
    borderRadius: '8px',
  }

  return (
    <div style={panelStyle}>
      <h2>{currentContact.firstName} {currentContact.lastName}</h2>
      <p><strong>Tel : </strong>{currentContact.tel}</p>
      <p><strong>Email : </strong>{currentContact.email}</p>
    </div>
  );
}

export default ContactPanel;