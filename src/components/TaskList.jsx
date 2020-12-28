import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Task from './Task';
import AddTask from './AddTask';

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          name={task.name}
          completed={task.completed}
        />
      ))}
      <AddTask visible={false} />
    </div>
  );
};

export default TaskList;