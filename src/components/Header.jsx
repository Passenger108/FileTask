
import React from 'react';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">FileTask</h1>
      </div>
      <div className="header-right">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;