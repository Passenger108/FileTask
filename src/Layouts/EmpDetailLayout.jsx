
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import EmpCard from "../components/EmpCard";
import TaskCard from "../components/TaskCard";
import "./EmpDetailLayout.css";

import DataContext from "../ context/DataContext";


const EmpDetailLayout = () => {

  const server = React.useContext(DataContext)

  const { id } = useParams(); // Get employee ID from URL
  //  id  = id || location.pathname.split('/')[4]; // during direct url visit...
  const location = useLocation();
  const emp = location.state || server.database.find(emp=>emp.id==location.pathname.split('/')[4]);
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