import React, { Component } from "react"
import "./styles/CreateTask.css"

export default class CreateTask extends Component {
  render() {
    return (
      <div className='card1'>
            <h3 className='card-title'>Create A Task</h3>

        <div className='card-upper'>
          <div className='drop-box'>
            <div>Drag file here</div>
          </div>

          <div className='card-body'>
            
            <div class="group">
              <input type="text" required="required" className='browser-default'/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div class="group">
              <input type="text" required="required" className='browser-default'/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Task</label>
            </div>
            <div class="group">
              <input type="text" required="required" className='browser-default'/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Other</label>
            </div>
          </div>
        </div>

        <div className='card-bottom'>
          <a>SUBMIT</a>
        </div>
       </div>

    );
  }
}
