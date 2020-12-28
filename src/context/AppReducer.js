const AppReducer = (state, action) => {
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
    default:
      return state;
  }
}

export default AppReducer;