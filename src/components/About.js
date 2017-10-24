import React from 'react';

import './css/About.css';

function About(props) {
    return (
        <div id="about" className="container-fluid culture">
        <div className="row culutre-box slideanim">
          <div className="col-sm-7 culture-small-box">
            <h3 className="sector-title text-center">项目概况</h3>
            <p className="unify-main-page">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“云梦盐津”大学生公益扶贫项目--由计算机学院党支部联合慈善义工队志愿者建立起的志愿扶贫项目。团队通过开展电子商务，组织爱心义卖等活动，帮助推广盐津当地特产，为盐津农家特产打开销路，以“公益+创业”的模式助力精准扶贫。“云盐津”网络平台旨在通过网络宣传，介绍盐津文化，推介公益扶贫资讯，并进一步为盐津农产品开拓网络营销阵地。它既是一个以慈善义工为主体的慈善文化传播平台，又是计算机专业学子的专业技能实践平台。在微信公众号、微博、高校易班等多媒体平台的共同运作下，“云盐津”网站的建设为努力搭建一个有特色、有文化、有影响的“云梦盐津”网络文化工作室而努力。
            </p>
          </div>
          <div className="col-sm-4 box-img-shadow js-modal-btn" onClick={() => { props.handlePlayVideo('videoModalVisible') }}>
            <img className="lazyload video-cover" data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/video-cover.jpg'} alt="videoCover"/>
          </div>
        </div>
        <a href="#shop" className="mouse-box-inverse responsive-mouse-box">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="unu"></span>
              <span className="doi"></span>
              </div>
          </a>
      </div>
    );
}

export default About;