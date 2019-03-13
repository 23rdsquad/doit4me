import React, { Component } from "react"
import "./styles/SignIn.css"

export default class SignIn extends Component {
  state ={
    words: ''
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
                        <input value={this.state.words} placeholder="doit4me@gmail.com" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Email</label>
                      </div>
                    </div>
                    <div className="row card-row">
                      <div className="input-field col s8">
                        <input value={this.state.words} placeholder="TaskCompleter" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Username</label>
                      </div>
                    </div>
                    <div className="row card-row">
                      <div className="input-field col s8">
                        <input value={this.state.words} placeholder="**********" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Password</label>
                      </div>
                    </div>
                    <section>
                      <a>Forgot Login</a>
                      <span>|</span>
                      <a>Forgot Password</a>
                    </section>
              </div>
              <div className="card-action">
                <a href="#">Submit</a>
                <a href="#">Sign up</a>
              </div>
            </div>
    );
  }
}
