import React, { Component } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
          <section>
            <div>Logo</div>
          </section>
          <menu>
            <Link to='/'>Create a report</Link>
            <Link to='/'>Sign in</Link>
            <Link to='/'>Sign up</Link>
          </menu>
      </nav>        
    );
  }
}
