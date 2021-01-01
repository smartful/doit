import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskState';

function Subtask({ subtask }) {
  const { toogleSubtask } = useContext(TaskContext);

  const subtaskStyle = {
    textDecoration: subtask.completed ? 'line-through red' : 'none',
  };

  const handleClick = () => {
    toogleSubtask(subtask);
  }

  return (
    <li style={subtaskStyle} onDoubleClick={handleClick}>{subtask.name}</li>
  );
}

export default Subtask;