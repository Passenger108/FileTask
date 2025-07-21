
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import EmpCard from "../components/EmpCard";
import TaskCard from "../components/TaskCard";
import "./EmpDetailLayout.css";


const EmpDetailLayout = () => {
  const { id } = useParams(); // Get employee ID from URL
  const location = useLocation();
  const emp = location.state;
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (status) => setFilter(status);

  const filteredTasks =
    filter === "all"
      ? emp.tasks
      : emp.tasks.filter((task) => task.status === filter);

  return (
    <div className="emp-detail-layout">
      <EmpCard employee={emp} /> {/* Could be dynamic fetch by ID */}
      
      <nav className="task-filter-nav">
        {["all", "active", "newTask", "completed", "failed"].map((status) => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? "active" : ""}`}
            onClick={() => handleFilterChange(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </nav>

      <div className="task-list">
        {filteredTasks.length ? (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="no-tasks">No task found</p>
        )}
      </div>
    </div>
  );
};

export default EmpDetailLayout;