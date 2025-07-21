
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import EmpCard from "../components/EmpCard";
import TaskCard from "../components/TaskCard";
import "./EmpDetailLayout.css";

const dummyTasks = [
  {
    id: 1,
    title: "Design Landing Page",
    description: "Create responsive landing page using Tailwind.",
    status: "new",
    date: "2025-07-10",
    category: "UI Design"
  },
  {
    id: 2,
    title: "Fix Navbar Bug",
    description: "Dropdown not working on Safari.",
    status: "completed",
    date: "2025-07-12",
    category: "Bug Fix"
  },
  {
    id: 3,
    title: "API Integration",
    description: "Integrate payment gateway API.",
    status: "active",
    date: "2025-07-15",
    category: "Backend"
  },
  {
    id: 4,
    title: "Audit Logs",
    description: "Set up log tracking system.",
    status: "failed",
    date: "2025-07-16",
    category: "Infrastructure"
  }
];

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
          filteredTasks.map((task) => <TaskCard key={task.taskTitle} task={task} />)
        ) : (
          <p className="no-tasks">No task found</p>
        )}
      </div>
    </div>
  );
};

export default EmpDetailLayout;