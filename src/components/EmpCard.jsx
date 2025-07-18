import React from 'react';
import './EmpCard.css';
import photo from "../assets/photo.png";

const EmpCard = ({ employee }) => {
  return (
    <div className="emp-card">
      {/* Left side - Image */}
      <div className="emp-card-img">
        <img src={employee.image || photo} alt={employee.name} />
      </div>

      {/* Right side - Info */}
      <div className="emp-card-info">
        <div className="emp-card-details">
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
        </div>

        <div className="emp-card-taskcounts">
          <div className="task-box">
            <h2>{employee.taskCounts.newTask}</h2>
            <p>New</p>
          </div>
          <div className="task-box">
            <h2>{employee.taskCounts.completed}</h2>
            <p>Completed</p>
          </div>
          <div className="task-box">
            <h2>{employee.taskCounts.failed}</h2>
            <p>Failed</p>
          </div>
          <div className="task-box">
            <h2>{employee.taskCounts.active}</h2>
            <p>Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpCard;