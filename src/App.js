import React, { Component } from 'react';
import routes from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className='App '>
        <div id="nav-wrapper" className="blue darken-1">
          <Navbar />
        </div>
        <div id="body">
          {routes}
        </div>
        <div id="footer">
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default App;
