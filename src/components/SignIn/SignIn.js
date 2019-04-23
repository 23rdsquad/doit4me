import React, { Component } from "react"
import "./styles/SignIn.css"

export default class SignIn extends Component {
  state ={
    words: '',
    email: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({ words: event.target.value })
  }
  render() {
    return (
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title">Sign In</span>
                    <div className="row card-row">
                      <div className="input-field col s8">
                        <input placeholder="TaskCompleter" type="text" id="email" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="email">Email</label>
                      </div>
                    </div>
                    <div className="row card-row">
                      <div className="input-field col s8">
                        <input placeholder="Password" id="password" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="password">Password</label>
                      </div>
                    </div>
                    <section>
                      <a href="/">Forgot Login</a>
                      <span>|</span>
                      <a href="/">Forgot Password</a>
                    </section>
              </div>
              <div className="card-action">
                <a href="/">Submit</a>
                <a href="/">Sign up</a>
              </div>
            </div>
    );
  }
}
