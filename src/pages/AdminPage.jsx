import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="admin-left">
        <h1 className="welcome-text">Welcome back, Admin!</h1>
      </div>

      <div className="admin-right">
        <button className="admin-button">Create Task</button>
        <button className="admin-button">Show Employees</button>
      </div>
    </div>
  );
};

export default AdminPage;