import React, { useState } from "react";
import "./UserTasks.css";


const UserTasks = ({ user }) => {
  const [filter, setFilter] = useState("all");
    console.log(user)
  const filteredTasks =
    filter === "all"
      ? user.tasks.filter((t) => t.status === "newTask" || t.status === "active")
      : user.tasks.filter((t) => t.status === filter);

  return (
    <div className="x-user-tasks-container">
      {/* Dashboard */}
      <section className="x-task-dashboard">
        {Object.entries(user.taskCounts).map(([status, count]) => (
          <div key={status} className={`x-task-card ${status}`}>
            <h3>{count}</h3>
            <p>{status.toLowerCase()}</p>
          </div>
        ))}
      </section>

      {/* Filter Navbar */}
      <nav className="x-task-filter-nav">
        {["all", "newTask", "active"].map((status) => (
          <button
            key={status}
            className={`x-filter-btn ${filter === status ? "active" : ""}`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </nav>

      {/* Task Card Scroll Container */}
      <div className="x-task-card-scroll-container">
        <div className="x-task-cards-scroll">
          {filteredTasks.map((task) => (
            <div key={task.id} className="x-task-item">
              <div className="x-task-item-s1">
              <h3>{task.taskTitle}</h3>
              <p>{task.taskDescription}</p>
              </div>
            <div className="x-task-item-s2">
              <p><strong>Date:</strong> {task.taskDate}</p>
              <p><strong>Category:</strong> {task.category}</p>
              {task.status === "active" && (
                <div className="x-task-actions">
                  <button className="complete">Mark Complete</button>
                  <button className="fail">Mark Failed</button>
                </div>
              )}
              {task.status === "newTask" && (
                <div className="x-task-actions">
                  <button className="accept">Accept Task</button>
                </div>
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTasks;