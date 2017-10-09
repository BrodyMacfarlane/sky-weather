import React, { Component } from 'react';
import logo from './big-logo.png';
import sky from './night-sky.png';
import './App.css';
import Weather from './components/Weather'
import './scroll'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super()
  }
  
  componentDidMount = () => {
    $(".loading").fadeOut(2000)
    $(".App").fadeIn(2000)
  }
  
  
  render() {
    return (
      <div className="App">
        <div className="backdrop">
          <img src={sky}/>
        </div>
        <div id="home" className="home-container container">
          <div className="search">
            <div className="searchInput">SEARCH</div>
          </div>
          <img src={logo} className="big-logo"/>
          <div className="look-good">weather that tries to look good.</div>
        </div>
        <div className="how-container container">
          <div className="sky-is-easy">SKY IS EASY</div>
          <div id="left-how-container" className="how-block-container">
            <div className="left-how how">
              Current weather<br />in<br />any city in the world
            </div>
          </div>
          <div id="mid-how-container" className="how-block-container">
            <div className="mid-how how">
              Simple weather<br />with<br />simple UI
            </div>
          </div>
          <div id="right-how-container" className="how-block-container">
            <div className="right-how how">
              Type anywhere<br />to<br />begin
            </div>
          </div>
        </div>
        <div id="search" className="weather-container container">
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;

