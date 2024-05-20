import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskState.jsx";

function TaskDescriptionEdit({ description, setIsEditDescription }) {
  const [taskDescription, setTaskDescription] = useState(description);
  const { currentTask, modifyTaskDescription } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyTaskDescription(currentTask.id, taskDescription);
    setIsEditDescription(false);
  };

  const submitButtonStyle = {
    cursor: "pointer",
    backgroundColor: "#4BA419",
    color: "white",
    fontSize: "10px",
    padding: "3px",
    border: "0",
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        cols={70}
        rows={15}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit" style={submitButtonStyle}>
        OK
      </button>
    </form>
  );
}

export default TaskDescriptionEdit;
