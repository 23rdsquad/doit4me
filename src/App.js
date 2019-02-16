import React, { Component } from 'react';
import routes from "./routes/routes";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div id='wrapper'>
        <Navbar />
        <div className='wrapper_body'>
          {routes}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
