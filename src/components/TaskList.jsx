import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskState';
import Task from './Task';
import AddTask from './AddTask';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const taskStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

  const blockStyle = {
    marginTop: '10px',
    marginBottom: '10px',
  }

  return (
    <div style={blockStyle}>
      <div style={taskStyle}>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
          />
        ))}
      </div>
      <AddTask visible={false} />
    </div>
  );
};

export default TaskList;