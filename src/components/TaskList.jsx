import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <div>
      {tasks.map(task => (
        <Task
          name={task.name}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;