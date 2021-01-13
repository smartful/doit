import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../../context/TaskState';
import SubTask from './Subtask';
import TaskName from './TaskName';
import TaskNameEdit from './TaskNameEdit';

function TaskPanel() {
  const [newSubtaskName, setNewSubtaskName] = useState('');
  const [isEditName, setIsEditName] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const { getCurrentTask, currentTask, modifyTaskDescription, addSubtask } = useContext(TaskContext);
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

  const editButtonStyle = {
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
    color: 'black',
    fontSize: '10px',
    padding: '3px',
    border: '0',
  };

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

  const TaskDescription = ({ description }) => {
    return (
      <div>
        {description &&
          description.split("\n").map((infos, key) => {
            return <p key={key}>{infos}</p>;
          })
        }
        <button onClick={() => setIsEditDescription(true)} style={editButtonStyle}>edit</button>
      </div>
    )
  }

  function TaskDescriptionEdit({description}) {
    const [taskDescription, setTaskDescription] = useState(description);
  
    const handleSubmit = (e) => {
      e.preventDefault();;
      modifyTaskDescription(currentTask.id, taskDescription);
      setIsEditDescription(false);
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
        <textarea cols={70} rows={15} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        <button type='submit' style={submitButtonStyle}>OK</button>
      </form>
    );
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
      {isEditDescription ? <TaskDescriptionEdit description={description} /> : <TaskDescription description={description} />}
    </div>
  );
}

export default TaskPanel;