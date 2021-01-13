import React from 'react';

const TaskName = ({name, setIsEditName}) => {
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
};

export default TaskName;