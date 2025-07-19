import React from "react";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="user-container">
      <div className="user-left">
        <h1 className="welcome-text">Welcome back, User!</h1>
      </div>

      <div className="user-right">
        <button className="user-button">Show Tasks</button>
        <button className="user-button">Take Actions</button>
      </div>
    </div>
  );
}

export default UserPage;