import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import './css/HeaderBody.css'

import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';



class HeaderBody extends Component {
    render() {
        return (
            <div className="header-body" id="topNav" style={{ height: '100vh', zIndex: 3 }}>
              <h1 className="project-title" style={{fontFamily: "LiDeBiao-Xing3cdd3233821a390"}}>云梦盐津</h1>
              <p className="project-desc">梦想，在这里发生</p>
              <a href="#about" className="mouse-box">
                <div className="mouse">
                  <div className="wheel">

                  </div>
                </div>
                <div>
                  <span className="unu">
                  </span>
                  <span className="doi"></span>
                  </div>
              </a>
            </div>
        )
    }
}

export default HeaderBody;