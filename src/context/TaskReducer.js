const persistTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "GET_CURRENT_TASK":
      return {
        ...state,
        currentTask: state.tasks.find(
          (task) => task.id === parseInt(action.payload)
        ),
      };

    case "ADD_TASK": {
      const updatedTasks = [...state.tasks, action.payload];
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case "DELETE_TASK": {
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case "MODIFY_TASK_NAME": {
      const { id, newName } = action.payload;
      const taskId = parseInt(id);
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
        currentTask:
          state.currentTask?.id === taskId
            ? { ...state.currentTask, name: newName }
            : state.currentTask,
      };
    }

    case "MODIFY_TASK_DESCRIPTION": {
      const { identifiant, newInfos } = action.payload;
      const taskId = parseInt(identifiant);
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, description: newInfos } : task
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
        currentTask:
          state.currentTask?.id === taskId
            ? { ...state.currentTask, description: newInfos }
            : state.currentTask,
      };
    }

    case "ADD_SUBTASK": {
      const subtask = action.payload;
      const taskId = parseInt(subtask.task_id);
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, subtasks: [...(task.subtasks ?? []), subtask] }
          : task
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
        currentTask:
          state.currentTask?.id === taskId
            ? {
                ...state.currentTask,
                subtasks: [...(state.currentTask.subtasks ?? []), subtask],
              }
            : state.currentTask,
      };
    }

    case "TOOGLE_SUBTASK": {
      const currentSubtask = action.payload;
      const taskId = parseInt(currentSubtask.task_id);
      const toggledSubtask = {
        ...currentSubtask,
        completed: !currentSubtask.completed,
      };

      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: (task.subtasks ?? []).map((subtask) =>
                subtask.id === toggledSubtask.id ? toggledSubtask : subtask
              ),
            }
          : task
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
        currentTask:
          state.currentTask?.id === taskId
            ? {
                ...state.currentTask,
                subtasks: (state.currentTask.subtasks ?? []).map((subtask) =>
                  subtask.id === toggledSubtask.id ? toggledSubtask : subtask
                ),
              }
            : state.currentTask,
      };
    }

    case "DELETE_SUBTASK": {
      const subtaskToErase = action.payload;
      const taskId = parseInt(subtaskToErase.task_id);
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: (task.subtasks ?? []).filter(
                (subtask) => subtask.id !== subtaskToErase.id
              ),
            }
          : task
      );
      persistTasks(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
        currentTask:
          state.currentTask?.id === taskId
            ? {
                ...state.currentTask,
                subtasks: (state.currentTask.subtasks ?? []).filter(
                  (subtask) => subtask.id !== subtaskToErase.id
                ),
              }
            : state.currentTask,
      };
    }

    default:
      return state;
  }
};

export default TaskReducer;
