import React from 'react';

const TaskDescription = ({ description, setIsEditDescription }) => {
  const editButtonStyle = {
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
    color: 'black',
    fontSize: '10px',
    padding: '3px',
    border: '0',
  };

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

export default TaskDescription;