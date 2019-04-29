import React, { Component } from "react"
import "./styles/Navbar.css"
import { Link } from "react-router-dom"
import { background } from "./background.jpg"
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
/*
export default class Navbar extends Component {
  componentWillMount(){
  }
    componentDidMount(){
     
            
    }
  
  render() {
    return (
      <nav className="blue darken-1">
    
        <div className="nav-wrapper blue darken-1 hide-on-med-and-down">
          <Link to='/' className="brand-logo">iDo</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/create'>Create a task</Link></li>
            <li><Link to='/signIn'>Sign in</Link></li>
            <li><Link to='/signIn'>Sign up</Link></li>
          </ul>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
                <div className="background">
                  <img src={ background } />
                </div>
                <a href="#user"><img className="circle" /></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div>
          </li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
      </nav>       
    );
  }
}
*/

const Navbar = () => {
    return (
      <nav className="blue lighten-3">
    
        <div className="nav-wrapper hide-on-med-and-down">
          <Link to='/' className="brand-logo">iDo</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/create'>Create a task</Link></li>
            <li><Link to='/signIn'>Sign in</Link></li>
            <li><Link to='/signIn'>Sign up</Link></li>
          </ul>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
                <div className="background">
                  <img src={ background } />
                </div>
                <a href="#user"><img className="circle" /></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div>
          </li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
      </nav>  
    )
}
export default Navbar
