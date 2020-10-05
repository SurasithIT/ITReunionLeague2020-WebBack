import React from "react";

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link" data-widget="pushmenu">
            <i className="fas fa-bars" />
          </span>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button className="btn btn-danger">Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
