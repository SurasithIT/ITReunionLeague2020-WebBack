import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink exact to="/" className="brand-link">
        <img
          src="it-logo.png"
          alt="IT Logo"
          className="brand-image "
          style={{ opacity: ".8" }}
        />
        <span className="brand-text ">IT Reunion League</span>
      </NavLink>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
            <li className="nav-item">
              <NavLink to="/Admin" className="nav-link">
                <i className="nav-icon fas fa-tools" />
                <p>Admin Area</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Match" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>Match</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Team" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>Team</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Player" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>Player</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Generation" className="nav-link">
                <i className="nav-icon fas fa-user" />
                <p>Generation</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
