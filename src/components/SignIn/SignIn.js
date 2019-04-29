import React, { Component } from "react"
import "./styles/SignIn.css"
import axios from 'axios';

export default class SignIn extends Component {
  state ={
    words: '',
    nickname: '',
    password: ''
  }
  componentWillMount() {
    console.log('ready!')
  }
  handleChange = (event) => {
    console.log(event)
    // this.setState({ words: event.target.value })
  }
  login(){ // Login as admin
    const nickname = this.state.nickname
    const password = this.state.password
    axios.post('/login', {
      nickname,
      password
    }).then(response => {
      console.log(response)
    }).catch(error => {
      alert("Wrong email or password");
    })
  }
  render() {
    return (
            <div className="SignIn-card">
              <div className="card-content black-text">
                <h3>Login</h3>
                <form>
                  <div className="input-field col s8">
                    <input  type="text" id="nickname" className="validate" onChange = {this.handleChange(this)}/>
                    <label className="active" htmlFor="nickname">Nickname</label>
                  </div>
                  <div className="input-field col s8">
                    <input  id="password" type="password" className="validate" onChange = {this.handleChange(this)}/>
                    <label className="active" htmlFor="password">Password</label>
                  </div>
                </form>
                <div>
                  <div className="center-align SignIn-buttons-box-narrow">
                    <a href="/" className="collection-item pulse">Forgot Login</a>
                    <a href="/" className="collection-item pulse">Forgot Password</a>
                  </div>
                </div>
                
              </div>
              <div className="SignIn-buttons-box">
                <button className="btn waves-effect waves-light z-depth-3" onClick={() => { this.login() }}>Submit</button>
                <button  className="btn waves-effect blue darken-1 z-depth-3" >Register</button>
              </div>
            </div>
    );
  }
}
