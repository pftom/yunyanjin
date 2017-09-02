import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import './css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-4 text-center" style={this.props.footerStyle}>
                <a href="#topNav" title="回到顶部">
                    <span className="glyphicon glyphicon-chevron-up"></span>
              </a>
                <h2 className="footer-title">东华大学公益项目</h2>
                <p className="declaration">FROM DHU WITH LOVE</p>
          </footer>
        )
    }
}

export default Footer;