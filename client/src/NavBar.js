import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';


import './css/NavBar.css';


class NavBar extends Component {
    render() {

        let renderLogin = null;
        if (this.props.isLoggedIn) {
            renderLogin = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="nav-operation" href="#shop">所有商品</a></li>
                    <li><a className="nav-operation" href="#news">新闻中心</a></li>
                    <li><a className="nav-operation" href="#about">关于我们</a></li>
                    <li><a className="nav-operation" href="#about">我的订单</a> </li>
                    <li><a className="nav-operation" onClick={() => { this.props.showCartModal('cartModalVisible') }}>购物车</a> </li>
                    </ul>
            )
        } else {
            renderLogin = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="nav-operation" href="#shop">所有商品</a></li>
                    <li><a className="nav-operation" href="#news">新闻中心</a></li>
                    <li><a className="nav-operation" href="#about">关于我们</a></li>
                    <li>
                        <a className="nav-operation" id="login-button" onClick={() => { this.props.showModal('loginModalVisible') }}>
                            <span className="glyphicon glyphicon-log-in"></span> 登录/注册
                        </a>
                    </li>
                  </ul>
            )
        }

        return (
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
                    {renderLogin}
                </div>
              </div>
            </nav>
        )
    }
}


export default NavBar;