import React, { Component } from "react";
import './styles/About.css'
import check from '../../assets/icons/check.png'
import clipboard from '../../assets/icons/clipboard.png'
import target from '../../assets/icons/target.png'
import world from '../../assets/icons/world.png'
import notebook from '../../assets/notebook.jpg'
import map from '../../assets/map.jpg'
import painting from '../../assets/painting.jpg'

export default class About extends Component {
  render() {
    return (
      <main className="About">
        <div>
          <div className="hero-image">
            <div className='hero-text'>
              <div>Title</div>
              <p>This is the content</p>
              <a class="waves-effect waves-light btn-large" href="/">Button</a>
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
            <a class="waves-effect waves-light btn-large" href="/">Sign in</a>
            <a class="waves-effect waves-light btn-large" href="/">Sign up</a>
          </div>
        </article>
      </main>
    );
  }
}
