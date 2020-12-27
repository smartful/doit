import React from 'react';

function Task({ name, completed }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Réalisé : {completed ? 'Oui': 'Non'}</p>
    </div>
  );
}

export default Task;