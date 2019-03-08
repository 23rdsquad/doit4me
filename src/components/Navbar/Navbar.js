import React, { Component } from "react"
import "./styles/Navbar.css"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">doit4me Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to='/create'>Create a task</Link></li>
            <li><Link to='/signIn'>Sign in</Link></li>
            <li><Link to='/signIn'>Sign up</Link></li>
          </ul>
        </div>
      </nav>       
    );
  }
}
