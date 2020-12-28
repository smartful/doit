import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTask() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const { addTask } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    addTask(newTask);
    setIsVisible(false);
  }

  const AddButton = (
    <button onClick={() => setIsVisible(true)}>Ajouter une tâche</button>
  );

  const AddForm = (
    <div>
      <h1>Ajouter une tâche</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Valider</button>
      </form>
    </div>
  );

  return (
    isVisible ? AddForm : AddButton
  );
}

export default AddTask;