const TaskReducer = (state, action) => {
  const tasks = [...state.tasks];

  switch(action.type) {
    case 'GET_CURRENT_TASK':
      return {
        ...state,
        currentTask: state.tasks.find(task => task.id === parseInt(action.payload)),
      };
    case 'ADD_TASK':
      localStorage.setItem('tasks', JSON.stringify([...state.tasks, action.payload]));
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(state.tasks.filter(task => task.id !== action.payload)));
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'MODIFY_TASK_NAME':
      const {id, newName} = action.payload;
      let taskIdx = tasks.findIndex(task => task.id === parseInt(id));
      tasks[taskIdx].name = newName;

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks,
      }
    case 'MODIFY_TASK_DESCRIPTION':
      const {identifiant, newInfos} = action.payload;
      let taskId = tasks.findIndex(task => task.id === parseInt(identifiant));
      tasks[taskId].description = newInfos;

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks,
      }
    case 'ADD_SUBTASK':
      let subtask = action.payload;
      let taskIndex = tasks.findIndex(task => task.id === parseInt(subtask.task_id));
      tasks[taskIndex].subtasks.push(subtask);

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks,
      }
    case 'TOOGLE_SUBTASK':
      let currentSubtask = action.payload;
      currentSubtask.completed = !currentSubtask.completed;
      let currentTaskIndex = tasks.findIndex(task => task.id === parseInt(currentSubtask.task_id));
      let currentSubtaskIndex = tasks[currentTaskIndex].subtasks.findIndex(element => element.id === currentSubtask.id);
      tasks[currentTaskIndex].subtasks[currentSubtaskIndex] = currentSubtask;

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks,
      }
    case 'DELETE_SUBTASK':
      let subtaskToErase = action.payload;
      let associatedTaskIndex = tasks.findIndex(task => task.id === parseInt(subtaskToErase.task_id));
      let newSubtasks = tasks[associatedTaskIndex].subtasks.filter(subtask => subtask.id !== subtaskToErase.id);
      tasks[associatedTaskIndex].subtasks = newSubtasks;

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks,
      }
    default:
      return state;
  }
}

export default TaskReducer;