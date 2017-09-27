import React, { Component } from 'react';

import './css/Partner.css';
import { data } from './data'

class Partners extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRowKeys: [],
        };
    }

    render() {

        return (
            <div className="container-fluid partner" id="partner">
                <h3 className="sector-title text-center">合作伙伴</h3>
                <div className="tab-box">
                </div>
            </div>
        )
    }
}

export default Partners;