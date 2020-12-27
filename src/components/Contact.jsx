import React from 'react';

function Contact({ firstName, lastName, tel, email }) {
  return (
    <div>
      <h3>{firstName} {lastName.toUpperCase()}</h3>
      <p>Tel : {tel}</p>
      <p>E-mail : {email}</p>
    </div>
  );
}

export default Contact;