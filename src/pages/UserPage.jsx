import React from "react";
import "./UserPage.css";
import {useNavigate} from "react-router-dom"

const UserPage = () => {
  const navigate = useNavigate();
  return (
    <div className="user-container">
      <div className="user-left">
        <h1 className="welcome-text">Welcome back, User!</h1>
      </div>

      <div className="user-right">
        <button className="user-button" onClick={()=>navigate("tasks")}>Show Tasks</button>
        <button className="user-button" onClick={()=>navigate("action")}>Take Actions</button>
      </div>
    </div>
  );
}

export default UserPage;