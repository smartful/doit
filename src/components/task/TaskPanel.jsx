import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../../context/TaskState';
import SubTask from './Subtask';
import TaskName from './TaskName';
import TaskNameEdit from './TaskNameEdit';
import TaskDescription from './TaskDescription';
import TaskDescriptionEdit from './TaskDescriptionEdit';

function TaskPanel() {
  const [newSubtaskName, setNewSubtaskName] = useState('');
  const [isEditName, setIsEditName] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const { getCurrentTask, currentTask, addSubtask } = useContext(TaskContext);
  const { id } = useParams();

  useEffect(() => {
    getCurrentTask(id);
  }, [id]);

  const subtasks = currentTask.subtasks;
  const description = currentTask.description;

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
      {isEditName ?
        <TaskNameEdit currentName={currentTask.name} setIsEditName={setIsEditName} />
        : <TaskName name={currentTask.name} setIsEditName={setIsEditName} />
      }

      <h4>Sous tâches</h4>
      <ul>
        {subtasks &&
          subtasks.map(subtask => <SubTask key={subtask.id} subtask={subtask} />)
        }
      </ul>
      <form onSubmit={addNewSubtask}>
        <input type='text' value={newSubtaskName} onChange={(e) => setNewSubtaskName(e.target.value)} />
        <button type='submit'>+</button>
      </form>

      <h4>Informations complémentaires</h4>
      {isEditDescription ?
        <TaskDescriptionEdit description={description} setIsEditDescription={setIsEditDescription}/> 
        : <TaskDescription description={description} setIsEditDescription={setIsEditDescription} />
      }
    </div>
  );
}

export default TaskPanel;