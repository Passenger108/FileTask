
import React from 'react';
import './CreateTaskPage.css';

const CreateTaskPage = () => {
  return (
    <div className="create-task-container">
      <div className="create-task-left">
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input type="text" id="title" placeholder="Enter task title" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>

        <div className="form-group">
          <label htmlFor="assignedTo">Assigned To</label>
          <input type="text" id="assignedTo" placeholder="Employee name or ID" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Enter task category" />
        </div>
      </div>

      <div className="create-task-right">
        <label htmlFor="description" className="desc-label">Task Description</label>
        <textarea id="description" placeholder="Write full task description here..."></textarea>
        <button className="create-btn">Create Task</button>
      </div>
    </div>
  );
};

export default CreateTaskPage;