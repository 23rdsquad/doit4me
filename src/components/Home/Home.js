import React, { Component } from "react";
import './styles/Home.css'
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    axios.get('/tasks')
      .then(res => {
        this.setState({ tasks: res.data.tasks})
        console.log("res.data =>", res.data.tasks)
      })
      .catch(error => {
        console.log(error)
      });
  }
  render() {
    let listOfTasks = null;
    if (this.state.tasks.length > 0) {
      listOfTasks = this.state.tasks.map((task, index) => {
        return (
          <div key={index} className="Home-task-box">
            <h1>{task.title}</h1>
            <h3>Category: {task.category}</h3>
            <h4>Creator: {task.creator_id}</h4>
            <h4>Reward: ${task.price}</h4>
            <h4>Description: {task.description}</h4>
            <h4>Status: {task.status}</h4>
            <h5>Location: {task.zip}</h5>
          </div>
        )
      })
    } else {
      listOfTasks = '';
    }
    return (
      <main className="Home">
          {listOfTasks}
      </main>
    );
  }
}
