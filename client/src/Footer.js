import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-4 text-center" style={this.props.footerStyle}>
                <h2 className="footer-title">东华大学公益项目</h2>
                <p className="declaration">This project follows <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
          </footer>
        )
    }
}

export default Footer;