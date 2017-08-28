import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';



class HeaderBody extends Component {
    render() {
        return (
            <div className="header-body" id="topNav">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src={carousel1} alt="carousel1" />
                </div>
              </div>
                <div className="title-board">
                  <div className="title-box">
                    <h1 className="project-title">云梦盐津</h1>
                    <p className="project-desc">梦想，在这里发生</p>
                  </div>
                </div>
            </div>
          </div>
        )
    }
}

export default HeaderBody;