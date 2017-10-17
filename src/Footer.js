import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import './css/modal.css';

import './css/Footer.css';

import wechat from './img/wechat-contact.png';
import qrcode from './img/qr_code.png';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-4 text-center" style={this.props.footerStyle}>
                <div className="row text-center">
                    <a href="#topNav" title="回到顶部">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                    </a>
                </div>
                <div className="footer-desc-box text-center">
                    <h2 className="footer-title">云梦盐津公益项目</h2>
                    <p className="declaration">FROM YANJIN WITH LOVE</p>
                </div>
                <img src={qrcode} alt="qrcode" className="qrcode"/>
          </footer>
        )
    }
}

export default Footer;