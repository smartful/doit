import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../../context/TaskState';
import SubTask from './Subtask';

function TaskPanel() {
  const [newSubtaskName, setNewSubtaskName] = useState('');
  const [isEditName, setIsEditName] = useState(false);
  const { getCurrentTask, currentTask, modifyTaskName, addSubtask } = useContext(TaskContext);
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

  const TaskName = ({name}) => {
    const labelStyle = {
      fontSize: '1.8rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    };

    const editButtonStyle = {
      cursor: 'pointer',
      backgroundColor: 'whitesmoke',
      color: 'black',
      fontSize: '10px',
      padding: '3px',
      border: '0',
    };

    return (
      <div style={labelStyle}>
        {name}
        <button onClick={() => setIsEditName(true)} style={editButtonStyle}>edit</button>
      </div>
    );
  }

  function TaskNameEdit({currentName}) {
    const [taskName, setTaskName] = useState(currentName);
  
    const handleSubmit = (e) => {
      e.preventDefault();;
      modifyTaskName(currentTask.id, taskName);
      setIsEditName(false);
    }
  
    const submitButtonStyle = {
      cursor: 'pointer',
      backgroundColor: '#4BA419',
      color: 'white',
      fontSize: '10px',
      padding: '3px',
      border: '0',
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <button type='submit' style={submitButtonStyle}>OK</button>
      </form>
    );
  }

  return (
    <div style={panelStyle}>
      {isEditName ? <TaskNameEdit currentName={currentTask.name} /> : <TaskName name={currentTask.name} />}

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
      {description &&
        description.split("\n").map((infos, key) => {
          return <p key={key}>{infos}</p>;
        })
      }
    </div>
  );
}

export default TaskPanel;