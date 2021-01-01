const TaskReducer = (state, action) => {
  switch(action.type) {
    case 'GET_CURRENT_TASK':
      return {
        ...state,
        currentTask: state.tasks.find(task => task.id === parseInt(action.payload)),
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'ADD_SUBTASK':
      const subtask = action.payload;
      let tasks = state.tasks;
      const taskIndex = state.tasks.findIndex(task => task.id === parseInt(subtask.task_id));
      tasks[taskIndex].subtasks.push(subtask);
      return {
        ...state,
        tasks: tasks,
      }
    default:
      return state;
  }
}

export default TaskReducer;