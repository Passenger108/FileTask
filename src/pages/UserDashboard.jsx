import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import './UserDashboard.css';

const FILTERS = ['all', 'newTask', 'active', 'completed', 'failed'];

const UserDashboard = ({ user }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const tasks = user.tasks || [];
  const name = user.name || "user";
  const filteredTasks =
    activeFilter === 'all'
      ? tasks
      : tasks.filter((task) => task.status === activeFilter);

  return (
    <div className="y-user-dashboard">
      <header className="y-user-header">
        <h2>Hello, {name} 👋</h2>
        <p>Here's a quick look at your tasks</p>
      </header>

      <nav className="y-user-filter-nav">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            className={`y-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </nav>

      <div className="y-user-scroll-container">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks-msg">No tasks found for {activeFilter}.</p>
        ) : (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default UserDashboard;