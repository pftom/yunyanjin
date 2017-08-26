import React, { Component } from 'react';
import './css/App.css';
import './css/rubick_pres.css';

import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';

import videoCover from './img/video-cover.jpg';
import map from './img/map.jpg';

import goods1 from './img/goods-1.png';
import goods2 from './img/goods-2.png';
import goods3 from './img/goods-3.png';
import goods4 from './img/goods-4.png';

import commit1 from './img/commit-1.svg'
import commit2 from './img/commit-2.svg'
import commit3 from './img/commit-3.svg'
import commit4 from './img/commit-4.svg'

import logo from './img/logo.svg';

import login from './img/login.png';

//horizontal scroll
import HorizontalScroll from 'react-scroll-horizontal';

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
                  <a className="navbar-brand" href="#topNav">
                  <svg  className="logo" width="63px" height="47px" viewBox="0 0 63 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>logo</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="index" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Tablet" transform="translate(-238.000000, -634.000000)" stroke="#FFFFFF" strokeWidth="2">
                              <g id="logo" transform="translate(239.000000, 635.000000)">
                                  <path d="M22.0502327,28.0829597 C22.0502327,28.0829597 15.0941292,30.791531 9.49231125,28.0829597 C3.89049333,25.3743884 7.75636327,18.4182849 7.75636327,18.4182849 C7.75636327,18.4182849 9.88628525,13.1981293 17.4210381,15.1310642 C17.4210381,15.1310642 27.8490377,-2.15454535 38.8679982,14.7001552 C38.8679982,14.7001552 48.7173484,9.91090863 50.8472704,20.5358951 C52.9771923,31.1608817 35.7777646,29.2771934 35.7777646,29.2771934" id="XMLID_306_"></path>
                                  <path d="M24.8819209,44.8514784 L56.4367766,44.8514784 C35.051375,36.0486217 2.85631156,44.2482057 2.85631156,44.2482057 C7.10384382,38.0677385 29.1171415,36.5164658 29.1171415,36.5164658 L29.2525701,25.4359469 L22.8381808,18.3690381" id="XMLID_305_"></path>
                                  <path d="M0.92337658,22.9982327 C-1.9083116,18.7507004 3.49651932,15.4019214 3.49651932,15.4019214 C2.72088299,8.32270091 10.8342852,10.2556359 10.8342852,10.2556359 C13.9491422,2.5115843 21.1391678,7.54706458 21.1391678,7.54706458" id="XMLID_303_"></path>
                                  <path d="M39.8283098,8.44581779 C39.1881021,1.36659734 32.2319985,2.64701286 32.2319985,2.64701286 C27.4673753,-3.27490894 21.6685704,2.64701286 21.6685704,2.64701286" id="XMLID_302_"></path>
                                  <path d="M35.4699724,18.8491939 L29.6465441,24.6356872" id="XMLID_301_"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="nav-operation" href="#shop">所有商品</a></li>
                    <li><a className="nav-operation" href="#news">新闻中心</a></li>
                    <li><a className="nav-operation" href="#about">关于我们</a></li>
                    <li>
                      <a href="" className="nav-operation" id="login-button">
                        <span className="glyphicon glyphicon-log-in"></span> 登录/注册
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

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

          <div id="about" className="container-fluid culture">
            <div className="row culutre-box">
              <div className="col-sm-7">
                <h3 className="culture-title text-center">我们的文化</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相比之前的传输协议，HTTP/2在底层方面做了很多优化。有安全、省时、简化开发、更好的适应复杂页面、提供缓存利用率等优势，阿里云早在去年发布的CDN6.0服务就已正式支持HTTP/2，访问速度最高可提升68%。今天我们从历史、特性、调试、性能四个层面来全面解析HTTP/2。</p>
              </div>
              <div className="col-sm-5">
                <img src={videoCover} alt="videoCover" className="video-cover"/>
              </div>
            </div>
          </div>

          <div id="news" className="container-fluid culture map-box">
            <div className="row culutre-box">
              <div className="col-sm-5">
                <img src={map} alt="map" className="map"/>
              </div>
              <div className="col-sm-7">
              <h3 className="culture-title text-center">在盐津，放飞梦想</h3>
              <p>云南省盐津县，位于云南省东北部，昭通市下辖县，东华大学对口帮扶的国家级贫困县。盐津属典型的山区县，优越的地理气候条件，造就了盐津良好的生态环境。盐津自古是入滇的要冲，素有“咽喉西蜀、锁钥南滇”之称，地处乌蒙山脉关河深谷的中段，位于四川和云南结合之处，也是古丝绸之路入滇的第一站。全县有着丰富的自然资源、独特的区位优势、厚重的人文情怀，更有着乌骨鸡、天麻、竹笋、腊肉、白酒等品种多样、品质优良、健康生态的众多农特产品。</p>
            </div>
            </div>
          </div>

          <div id="shop" className="container-fluid goods">
            <h3 className="goods-title text-center">商品展示</h3>
              <div className="row text-center scrollmenu">
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods1} alt="good1" className="goodItem"/>
                    <p><strong>Paris</strong></p>
                    <p>一口忘忧</p>
                  </div>
                </div>
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods2} alt="good2" className="goodItem"/>
                    <p><strong>New York</strong></p>
                    <p>纯天然酿造，不含任何化学物质</p>
                  </div>
                </div>
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods3} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods3} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods3} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item">
                  <div className="thumbnail">
                    <img src={goods3} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                </div>
              </div>



          <div className="container-fluid commitments">
            <h3 className="goods-title text-center commitments-title">我们的承诺</h3>
            <div className="col-sm-6 commit">
              <img src={commit1} alt="commit-1" /><br />
              <h4>正品保证</h4>
              <p>严格控制供应渠道，全部商品均由品牌供应商直接采购供货，品质有保障。</p>
            </div>
            <div className="col-sm-6 commit">
              <img src={commit2} alt="commit-2" /><br />
              <h4>支持退换货</h4>
              <p>支持退换货，退换货请在商品收到的七天内进行退换货申请，并将商品寄回。</p>
            </div>
            <div className="col-sm-6 commit commit-bottom">
              <img src={commit3} alt="commit-3" /><br />
              <h4>尽快发货</h4>
              <p>我们会尽快安排发货，在发货后一般会在2-7天左右送达。</p>
            </div>
            <div className="col-sm-6 commit commit-bottom">
              <img src={commit4} alt="commit-4" /><br />
              <h4>关于色差</h4>
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
