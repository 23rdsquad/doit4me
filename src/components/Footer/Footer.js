import React, { Component } from "react";
import "./styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue darken-1">
          <div className="footer-info">
              <p>DoIt4Me by <span><a className="grey-text text-lighten-4" target="_blank" href="23rdsquad.us">23rdSquad</a></span> , 2019</p>
          </div>
        </footer>
    );
  }
}