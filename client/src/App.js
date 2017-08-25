import React, { Component } from 'react';
import './css/App.css';
import './css/rubick_pres.css';

import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';

import videoCover from './img/video-cover.jpg';
import map from './img/map.jpg';

import goods1 from './img/goods-1.jpg';
import goods2 from './img/goods-2.jpg';
import goods3 from './img/goods-3.jpg';

import commit1 from './img/commit-1.svg'
import commit2 from './img/commit-2.svg'
import commit3 from './img/commit-3.svg'
import commit4 from './img/commit-4.svg'

import logo from './img/logo.svg';

class App extends Component {
  render() {
    return (
      <div>

          <nav className="navbar navbar-default navbar-fixed-top navbar-transparent" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span> 
                  </button>
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className="logo"/>
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a class="nav-operation" href="#about">网上商城</a></li>
                    <li><a class="nav-operation" href="#services">新闻中心</a></li>
                    <li><a class="nav-operation" href="#portfolio">关于我们</a></li>
                  </ul>
                </div>
              </div>
            </nav>

          <div className="header-body">
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

          <div className="container-fluid culture">
            <div className="row">
              <div className="col-sm-7">
                <h2>我们的文化</h2>
                <p>相比之前的传输协议，HTTP/2在底层方面做了很多优化。有安全、省时、简化开发、更好的适应复杂页面、提供缓存利用率等优势，阿里云早在去年发布的CDN6.0服务就已正式支持HTTP/2，访问速度最高可提升68%。今天我们从历史、特性、调试、性能四个层面来全面解析HTTP/2。</p>
              </div>
              <div className="col-sm-5">
                <img src={videoCover} alt="videoCover" className="video-cover"/>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <img src={map} alt="map" className="map"/>
              </div>
              <div className="col-sm-7">
              <h2>盐津简介</h2>
              <p>云南省盐津县，位于云南省东北部，昭通市下辖县，东华大学对口帮扶的国家级贫困县。盐津属典型的山区县，优越的地理气候条件，造就了盐津良好的生态环境。盐津自古是入滇的要冲，素有“咽喉西蜀、锁钥南滇”之称，地处乌蒙山脉关河深谷的中段，位于四川和云南结合之处，也是古丝绸之路入滇的第一站。全县有着丰富的自然资源、独特的区位优势、厚重的人文情怀，更有着乌骨鸡、天麻、竹笋、腊肉、白酒等品种多样、品质优良、健康生态的众多农特产品。</p>
            </div>
            </div>
          </div>

          <div className="container-fluid goods">
            <h2 className="sector-title">部分商品展示</h2>
          </div>

          <div className="container-fluid text-center bg-grey">
            <div className="row text-center">
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src={goods1} alt="good1" className="goodItem"/>
                  <p><strong>Paris</strong></p>
                  <p>Yes, we built Paris</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src={goods2} alt="good2" className="goodItem"/>
                  <p><strong>New York</strong></p>
                  <p>We built New York</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src={goods3} alt="good3" className="goodItem"/>
                  <p><strong>San Francisco</strong></p>
                  <p>Yes, San Fran is ours</p>
                </div>
              </div>
              </div>
          </div>


          <div className="container-fluid commitments">
            <h2 className="sector-title">我们的承诺</h2>
            <div className="col-sm-6 commit">
              <img src={commit1} alt="commit-1" /><br />
              <h3>正品保证</h3>
              <p>严格控制供应渠道，全部商品均由品牌供应商直接采购供货，品质有保障。</p>
            </div>
            <div className="col-sm-6 commit">
              <img src={commit2} alt="commit-2" /><br />
              <h3>支持退换货</h3>
              <p>支持退换货，退换货请在商品收到的七天内进行退换货申请，并将商品寄回。</p>
            </div>
            <div className="col-sm-6 commit">
              <img src={commit3} alt="commit-3" /><br />
              <h3>尽快发货</h3>
              <p>我们会尽快安排发货，在发货后一般会在2-7天左右送达。</p>
            </div>
            <div className="col-sm-6 commit">
              <img src={commit4} alt="commit-4" /><br />
              <h3>关于色差</h3>
              <p>所卖商品均为实物拍摄，因此难免会由于灯光等原因出现略微色差，一切以实物为准。</p>
            </div>
          </div>

          
          <footer className="container-fluid bg-4 text-center">
            <h2>东华大学公益项目</h2>
            <p className="declaration">This project follows <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
          </footer>
      </div>
    );
  }
}

export default App;
