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
      <div className='sign-in-card'>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title">Sign In</span>
                <div className="row">
                      <div className="input-field col s6">
                        <input value={this.state.words} placeholder="Thene" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input value={this.state.words} placeholder="Thene" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Username</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <input value={this.state.words} placeholder="Thene" type="text" className="validate" onChange = {this.handleChange}/>
                        <label className="active" for="first_name2">Password</label>
                      </div>
                    </div>
              </div>
              <div className="card-action">
                <a href="#">Submit</a>
                <a href="#">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
