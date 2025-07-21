
import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const { taskTitle, taskDescription, status, taskDate, category } = task;

  return (
    <div className={`task-card ${status}`}>
      <div className={`task-status ${status}`}>{status.toUpperCase()}</div>
      <div className="task-info">
        <h3 className="task-title">{taskTitle}</h3>
        <p className="task-desc">{taskDescription}</p>
        <div className="task-meta">
          <span className="task-date">{taskDate}</span>
          <span className="task-category">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;