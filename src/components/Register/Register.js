import React, { Component } from "react"
import "./styles/Register.css"
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Register extends Component {
  state ={
    "nickname": '',
    "email": '',
    "password": '',
    "con_password": '',
    "avatar": null
  }
  fileInput = React.createRef();

  componentWillMount() {
    console.log('ready!')
  }
  handleChange = (event) => {
    let key = event.target.id;
    this.setState({ 
      [key]: event.target.value 
    })
  }
  upload_image(){
    console.log(this.fileInput.current.files[0]);
    console.log(this.fileInput.current.files[0].type.slice(0,5))
    if(this.fileInput.current.files[0].type.slice(0,5) != "image"){
      
      return;
    }
    this.getBase64(this.fileInput.current.files[0]).then(img =>
      this.setState({
        "avatar": img
      })
    );
    
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  remove_image(){
    this.setState({
      "avatar": null
    })
  }
  register(){ // Login as admin
    const nickname = this.state.nickname
    const password = this.state.password
    console.log(this.state)
    console.log(this.fileInput.current.files[0])
    // axios.post('/register', {
    //   nickname,
    //   password
    // }).then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   alert("Wrong email or password");
    // })
  }
  render() {
    return (
            <div className="Register-card">
              <div className="card-content black-text">
                <h3>Register</h3>
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="nickname" type="text" className="validate" onChange={event => this.handleChange(event)} />
                      <label htmlFor="nickname">Nickname</label>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" onChange={event => this.handleChange(event)}/>
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="password" type="password" className="validate" onChange={event => this.handleChange(event)}/>
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="con_password" type="password" className="validate" onChange={event => this.handleChange(event)}/>
                      <label htmlFor="con_password">Confirm Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <h5>Upload your avatar</h5>
                      <div className = "file-field input-field">
                        <div className = "btn-floating waves-effect waves-light">
                          <i className="material-icons">add</i>
                          <input type = "file" id="avatar" ref={this.fileInput} onChange={() =>this.upload_image()} />
                        </div>
                        {this.state.avatar && <div className="center">
                          <div className=" img-wrap">
                            <i className="close material-icons" onClick={() => { this.remove_image() }}>cancel</i>
                            <img className="Register-avatar center-align" src={this.state.avatar} accept="image/x-png,image/gif,image/jpeg"/>
                          </div>
                        </div>}
                        
                      </div>
                      
                    </div>
                  </div>
                </form>
              </div>
              <div className="Register-buttons-box">
                <button className="btn waves-effect waves-light z-depth-3" onClick={() => { this.register() }}>Submit</button>
              </div>
            </div>
    );
  }
}
