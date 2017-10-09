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
          <div id="sky-is-easy-border"></div>
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
        <div id="footer-container" className="container">
          <div id="left-foot" className="footer-guy">
            <div className="foot-header">ABOUT</div>
            <div className="foot-header-line"></div>
            <div className="footer-guy-text">This is a site I built at DevMountain 29.  I used the openweathermap.org API.  Every part of this project was coded personally by myself using the frameworks in the “Built With” section.  As of now I am looking to contribute my skills to a company striving to be the best they can be.</div>
          </div>
          <div id="mid-foot" className="footer-guy">
            <div className="foot-header">BUILT WITH</div>
            <div className="foot-header-line"></div>
            <div id="mid-foot-text" className="footer-guy-text">so much love. <br />
            This project was built with HTML5, CSS3, Vanilla Javascript, JQuery, and my new favorite front-end framework: React.  The site was initially planned and aesthetically engineered using Adobe Illustrator.  Many logos were trashed, many memes left behind.  I then jumped into React and layed out all of my components and divs, and got the styling to a decent starting point, and finished by adding the functionality.<br />Web is Love, Web is Life.</div>
          </div>
          <div id="right-foot" className="footer-guy">
            <div className="foot-header">CONTACT ME</div>
            <div className="foot-header-line"></div>
            <div className="footer-guy-text">I have links to my social media below. Chat with me!<br />macfarlanebrody@gmail.com.<br />Bring your comments, questions, concerns my way!  I’m so ready to contribute to the industry.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

