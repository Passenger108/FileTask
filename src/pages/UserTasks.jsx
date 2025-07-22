import React, { useState } from "react";
import "./UserTasks.css";

import DataContext from "../ context/DataContext";
import LoginContext from "../ context/LoginContext";




const UserTasks = ({ user }) => {
  const [filter, setFilter] = useState("all");

  const server = React.useContext(DataContext)
  const secret = React.useContext(LoginContext)

    console.log(server.database)
  const filteredTasks =
    filter === "all"
      ? user.tasks.filter((t) => t.status === "newTask" || t.status === "active")
      : user.tasks.filter((t) => t.status === filter);


    function handleClick(targetTaskId, oldStatus ,newStatus){
      let {taskCounts,tasks}=secret.loginCred.emp;
      taskCounts[oldStatus]--; //direct manipulation
      taskCounts[newStatus]++; //direct manipulation

      tasks = tasks.map(task => ( task.id!=targetTaskId? task: ({...task,status:newStatus})))

      const newDatabase = server.database.map(emp => (emp.id!=secret.loginCred.emp.id)?emp:{...emp,taskCounts,tasks})
      newDatabase.count = server.database.count + 1;
      server.setDatabase(newDatabase)
      console.log("Updated loggin:",secret.loginCred.emp)
      secret.setLoginCred((loginCred)=>({...loginCred,emp:({...loginCred.emp,taskCounts,tasks})}))
    }

  return (
    <div className="x-user-tasks-container">

    <header className="x-user-header">
        <h2>Time to act, {user.name.split(' ')[0]}!! </h2>
      </header>

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
          {filteredTasks.length==0 && <p className="empty-msg">Empty Category</p>}
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
                  <button className="complete" onClick={()=>handleClick(task.id,"active","completed")}>Mark Complete</button>
                  <button className="fail" onClick={()=>handleClick(task.id,"active","failed")}>Mark Failed</button>
                </div>
              )}
              {task.status === "newTask" && (
                <div className="x-task-actions">
                  <button className="accept" onClick={()=>handleClick(task.id,"newTask","active")}>Accept Task</button>
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