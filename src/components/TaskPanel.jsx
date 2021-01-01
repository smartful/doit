import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskState';
import SubTask from './Subtask';

function TaskPanel() {
  const [newSubtaskName, setNewSubtaskName] = useState('');
  const { getCurrentTask, currentTask, addSubtask } = useContext(TaskContext);
  const { id } = useParams();

  useEffect(() => {
    getCurrentTask(id);
  }, [id]);
  
  const subtasks = currentTask.subtasks;
  const panelStyle = {
    textAlign: 'left',
    width: '60%',
    padding: '10px',
    border: '6px solid black',
    borderRadius: '8px',
  }

  const addNewSubtask = (e) => {
    e.preventDefault();

    const newSubtask = {
      id: Date.now(),
      task_id: id,
      name: newSubtaskName,
      completed: false,
    };
    addSubtask(newSubtask);
  }

  return (
    <div style={panelStyle}>
      <h2>{currentTask.name}</h2>
      <h4>Sous tâches</h4>
      <ul>
        {subtasks &&
          subtasks.map(subtask => <SubTask key={subtask.id} subtask={subtask} />)
        }
      </ul>
      <input type='text' value={newSubtaskName} onChange={(e) => setNewSubtaskName(e.target.value)} />
      <button onClick={addNewSubtask}>+</button>

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