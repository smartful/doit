import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactState';

function AddContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const { addContact } = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      tel,
      email,
    };
    addContact(newContact);
    setIsVisible(false);
  }

  const AddButton = (
    <button onClick={() => setIsVisible(true)}>Ajouter un contact</button>
  );

  const AddForm = (
    <div>
      <h1>Ajouter un contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>Prénom : </label>
        <input id='firstname' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br/>
        
        <label htmlFor='lastName'>Nom : </label>
        <input id='lastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br/>
        
        <label htmlFor='tel'>Téléphone : </label>
        <input id='tel' type='phone' value={tel} onChange={(e) => setTel(e.target.value)} />
        <br/>
        
        <label htmlFor='email'>Courriel : </label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>

        <button type='submit'>Valider</button>
      </form>
    </div>
  );

  return (
    isVisible ? AddForm : AddButton
  );
}

export default AddContact;