import React from "react";
import {Link, useNavigate,useLocation} from "react-router-dom"
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="admin-container">
      <div className="admin-left">
        <h1 className="welcome-text">Welcome back, Admin!</h1>
      </div>

      <div className="admin-right">

          <button className="admin-button" onClick={()=>navigate("createtask")}>
              Create New Task
          </button>

          <button className="admin-button" onClick={()=>navigate("createnewemployee")}>
              Create New Employee
          </button>

          <button className="admin-button" onClick={()=>{navigate("employees")}}>
            Employees Status
          </button>
      </div>
    </div>
  );
};

export default AdminPage;