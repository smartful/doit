import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function TaskPanel() {
  const { getCurrentTask, currentTask } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    getCurrentTask(id);
  }, []);

  return (
    <div>
      <h2>{currentTask.name}</h2>
      <h4>Sous tâches</h4>
      <ul>
        <li>Sous tâche 1</li>
        <li>Sous tâche 2</li>
        <li>Sous tâche 3</li>
        <li>Sous tâche 4</li>
      </ul>
      <h4>Informations complémentaires</h4>
      <p>bla bla bla</p>
      <h4>Contact associées</h4>
      <ul>
        <li>aaaaaa AAAAAAAAA</li>
        <li>bbbbbb BBBBBBBBB</li>
      </ul>
    </div>
  );
}

export default TaskPanel;