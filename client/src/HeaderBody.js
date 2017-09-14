import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import './css/modal.css';

import './css/HeaderBody.css'

class HeaderBody extends Component {
    render() {
        return (
            <div className="header-body" id="topNav" style={{ height: '100vh', zIndex: 3 }}>
              <h1 className="project-title" style={{fontFamily: "LiDeBiao-Xing3cdd3233821a390"}}>云梦盐津</h1>
              <p className="project-desc">田园之上的公益项目</p>
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