
import React from "react";
import "./TaskCard.css";

import LoginContext from "../ context/LoginContext";

const TaskCard = ({ task }) => {
  const { taskTitle, taskDescription, status, taskDate, category } = task;
  const secret = React.useContext(LoginContext)

  const actionBtn = (status=="active"||status=="newTask")? 0:1

  return (
    <div className={`task-card ${status}`}>
      <div className={`task-status ${status}`}>{status.toUpperCase()}</div>
      <div className="task-info">
        <h3 className="task-title">{taskTitle}</h3>
        <p className="task-desc">{taskDescription}</p>
        <div className="task-meta">
          <span className="task-date">{taskDate}</span>
          <span className="task-category">{category}</span>
          {secret.loginCred.isAdmin&&<button className="task-btn">{actionBtn?"Re-open":"Revoke"}</button>}
        </div>
      </div>
    </div>
  );
};

export default TaskCard; 