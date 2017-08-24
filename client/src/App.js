import React, { Component } from 'react';
import './css/slippry.css'
import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';

class App extends Component {
  render() {
    return (
      <div>
          <ul ref={(ul) => { this.slider = ul; }} id="slider" style={{listStyle: 'none', width: '100%', height: '100%', padding: 0, margin: 0}} className="hde">	
            <li><img src={carousel1} alt="轮播图1"/></li>
            <li><img src={carousel2} alt="轮播图2"/></li>
            <li><img src={carousel3} alt="轮播图3"/></li>   
          </ul>
      </div>
    );
  }
}

export default App;
