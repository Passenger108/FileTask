
import React from 'react';
import './Header.css';

import {Link} from "react-router-dom"

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="header-left">

      <Link to="/filetask/admin"> 
      {/* // make it work */}
        <h1 className="header-title">FileTask</h1>
      </Link>

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