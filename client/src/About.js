import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import './css/About.css';

import videoCover from './img/video-cover.jpg';

class About extends Component {
    render() {
        return (
            <div id="about" className="container-fluid culture">
            <div className="row culutre-box">
              <div className="col-sm-7">
                <h3 className="culture-title text-center">我们的文化</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相比之前的传输协议，HTTP/2在底层方面做了很多优化。有安全、省时、简化开发、更好的适应复杂页面、提供缓存利用率等优势，阿里云早在去年发布的CDN6.0服务就已正式支持HTTP/2，访问速度最高可提升68%。今天我们从历史、特性、调试、性能四个层面来全面解析HTTP/2。</p>
              </div>
              <div className="col-sm-5 box-img-shadow">
                <img src={videoCover} alt="videoCover" className="video-cover"/>
              </div>
            </div>
          </div>
        )
    }
}

export default About;