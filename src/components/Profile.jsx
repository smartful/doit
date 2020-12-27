import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>Information</h2>
      <p>Prénom : Rémi</p>
      <p>Nom : RODRIGUES</p>
      <p>Société : World Company</p>
      <p>Adresse : - </p>
      <p>Ville : - </p>
      <p>Code Postal : - </p>
      <p>Téléphone : 06 66 66 66 69</p>
      <p>E-mail : remi.rodrigues@worldcompany.com</p>
      <p>---</p>
      <h2>Actions</h2>
      <button>Changer coordonnées</button>
      <button>Changer mot de passe</button>
    </div>
  );
}

export default Profile;