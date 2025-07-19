import React from "react";
import {Link, useNavigate} from "react-router-dom"
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div className="admin-left">
        <h1 className="welcome-text">Welcome back, Admin!</h1>
      </div>

      <div className="admin-right">

          <button className="admin-button" onClick={()=>navigate("createtask")}>
              Create Task
          </button>

          <button className="admin-button" onClick={()=>{navigate("employees")}}>
            Show Employees
          </button>
      </div>
    </div>
  );
};

export default AdminPage;