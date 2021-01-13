import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskState';

function TaskNameEdit({currentName, setIsEditName}) {
  const [taskName, setTaskName] = useState(currentName);
  const { currentTask, modifyTaskName } = useContext(TaskContext);

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

export default TaskNameEdit;