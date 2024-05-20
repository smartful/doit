import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskState.jsx";

function Subtask({ subtask }) {
  const { toogleSubtask, eraseSubtask } = useContext(TaskContext);

  const subtaskStyle = {
    textDecoration: subtask.completed ? "line-through red" : "none",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px",
  };

  const eraseButtonStyle = {
    cursor: "pointer",
    backgroundColor: "red",
    border: "none",
    borderRadius: "50%",
    color: "white",
    padding: "3px 5px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
  };

  const handleClick = () => {
    toogleSubtask(subtask);
  };

  const deleteSubtask = () => {
    eraseSubtask(subtask);
  };

  return (
    <li style={subtaskStyle} onClick={handleClick}>
      {subtask.name}{" "}
      <button onClick={deleteSubtask} style={eraseButtonStyle}>
        x
      </button>
    </li>
  );
}

export default Subtask;
