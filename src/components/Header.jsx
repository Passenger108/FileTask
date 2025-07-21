
import React from 'react';
import './Header.css';

import {Link, useNavigate, useLocation} from "react-router-dom"

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-left">

      <Link to="/filetask/admin"> 
      {/* // make it work */}
        <h1 className="header-title">FileTask</h1>
      </Link>

      </div>
      <div className="header-right">
        {location.pathname.split('/').length>3
          &&
          <button className="back-btn" onClick={()=>navigate(-1)}>
            {"< Back" }
          </button>
        }
        <button className="logout-btn" onClick={onLogout}>
          Logout 
        </button>
      </div>
    </header>
  );
};

export default Header;