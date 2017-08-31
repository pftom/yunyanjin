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
            <div className="row culutre-box slideanim">
              <div className="col-sm-7">
                <h3 className="culture-title text-center">我们的文化</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云南省盐津县，东华大学对口帮扶的国家级贫困县。2015年10月，东华大学计算机学院派出调研小组前往盐津，发现当地诸如天麻、乌骨鸡等优势特产品由于市场挤压生而少有销路。结合专业知识，计算机学院慈善义工队从电商扶贫出发，组建“云梦盐津”志愿扶贫团队，通过扶贫调研，并在上海开展电子商务，组织爱心义卖等活动，帮助推广盐津当地特产，为盐津农家特产打开销路，以“公益+创业”的模式助力精准扶贫。</p>
              </div>
              <div className="col-sm-5 box-img-shadow js-modal-btn" onClick={() => { this.props.handlePlayVideo('videoModalVisible') }}>
                <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/video-cover.png'} alt="videoCover" className="video-cover"/>
              </div>
            </div>
          </div>
        )
    }
}

export default About;