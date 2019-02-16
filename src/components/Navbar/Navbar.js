import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-default" id="nav">
          <div className="container">
            <input type="checkbox" id="navbar-toggle-cbox" />
            
            <div id="navbar" className="navbar-collapse collapse">
                <h2>Navbar</h2>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
