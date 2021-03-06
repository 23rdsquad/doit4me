import React, { Component } from "react";
import './styles/About.css'
import check from '../../assets/icons/check.png'
import clipboard from '../../assets/icons/clipboard.png'
import target from '../../assets/icons/target.png'
import world from '../../assets/icons/world.png'
import notebook from '../../assets/notebook.jpg'
import map from '../../assets/map.jpg'
import painting from '../../assets/painting.jpg'
import { Link } from "react-router-dom";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      search_input: event.target.value
    })
  }
  createClicked(){
    console.log("createClicked()")
  }
  searchClicked(){

    console.log(this.state.search_input)
  }
  
  render() {
    
    
      return (
        <main className="About">
            <div>
              <div className="hero-image">
                <div className='hero-text'>
                  <div className="center-align">We will let you free from your duties.</div>
                    <h4 className="center-align">Let someone else do your job.</h4>
                    <form className="col s12" autoComplete="off">
                      <div className="input-field col s6">
                        <input id="about-input" type="text" className="about-input" onChange={event => this.handleChange(event)} />
                        <label  className="center-align about-input-label" htmlFor="about-input">What do you need?</label>
                      </div>
                    </form>
                    <div className="about-buttons-space-around">
                        <Link to="/signin"><button className="waves-effect green lighten-1 btn-large"  onClick={() => this.createClicked()}>Create</button></Link>
                        <Link to="/home"><button className="waves-effect blue lighten-3 btn-large" onClick={() => this.searchClicked()}>Search</button></Link>
                    </div>
                </div>
              </div>
            </div>  
             
    
            <section>
              <div>
                <img src={check} alt="check" />
                <h5>Reliable Taskers</h5>
                <p>Task perfomers verified through us.</p>
              </div>
              <div>
                <img src={clipboard} alt="clipboard" />
                <h5>Amazing Reviews</h5>
                <p>We ensure every customer receives satifactory work.</p>
              </div>
              <div>
                <img src={target} alt="target" />
                <h5>Perfect Score</h5>
                <p>There is no task that has gone uncompleted.</p>
              </div>
              <div>
                <img src={world} alt="world" />
                <h5>Any Location</h5>
                <p>We provide task around the world</p>
              </div>
            </section>
    
            <article className='middle'>
              <h2>How is this possible?</h2>
              <div>
                <div>
                  <img src={notebook} alt="notebook" />
                </div>
                <div>
                  <h5>Title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={map} alt="map" />
                </div>
                <div>
                  <h5>Title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={painting} alt="painting" />
                </div>
                <div>
                  <h5>Title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </article>
    
    
            <article className='end'>
              <h1>What are you waiting for?</h1>
              <h4>Get started today.</h4>
              <div>
                <a className="waves-effect waves-light btn-large" href="/">Sign in</a>
                <a className="waves-effect waves-light btn-large" href="/">Sign up</a>
              </div>
            </article>
          </main>
      );
    
  }
}


