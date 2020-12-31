import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskState';

function Task({ id, name }) {
  const { deleteTask } = useContext(TaskContext);

  const taskStyle = {
    width: '25vw',
    height: '15%',
    padding: '10px',
    margin: '5px',
    border: '6px solid black',
    borderRadius: '8px',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '10px',
    padding: '3px',
    border: '0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  }

  const taskLink = `/task/${id}`;

  return (
    <div style={taskStyle}>
      <h3><Link to={taskLink} style={linkStyle}>{name}</Link></h3>
      <button onClick={() => deleteTask(id)} style={closeButtonStyle}>Supprimer</button>
    </div>
  );
}

export default Task;