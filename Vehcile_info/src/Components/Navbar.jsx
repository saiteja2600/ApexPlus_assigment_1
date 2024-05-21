import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="sidebar vh-100">
      <nav className="navbar ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/All Sceniaro">
                All Sceniaro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Add Sceniaro">
                Add Scenario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">
                Add Vehicles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
