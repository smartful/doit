import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactState';

function Contact({ id, firstName, lastName, tel, email }) {
  const { deleteContact } = useContext(ContactContext);

  const taskStyle = {
    width: '45vw',
    height: '15%',
    padding: '10px',
    margin: '5px',
    border: '6px solid black',
    borderRadius: '8px',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '10px',
    padding: '3px',
    border: '0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  }

  const contactLink = `/contact/${id}`;

  return (
    <div style={taskStyle}>
      <h3><Link to={contactLink} style={linkStyle}>{firstName} {lastName.toUpperCase()}</Link></h3>
      <p>Tel : {tel}</p>
      <p>E-mail : {email}</p>
      <button onClick={() => deleteContact(id)} style={closeButtonStyle}>Supprimer</button>
    </div>
  );
}

export default Contact;