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
                <div className="row tab-box">
                    <div className="col-sm-6 left-title">
                        <h2 className="text-center">盐津合作伙伴</h2>
                    </div>
                    <div className="col-sm-6 text-center">
                        <div className="right-line-height">
                            <div className="desc">延续爱心，津我所能</div>
                            <a className="download" href="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E7%9B%90%E6%B4%A5%E5%8E%BF%E5%86%9C%E6%B0%91%E4%B8%93%E4%B8%9A%E5%90%88%E4%BD%9C%E7%A4%BE.xls">下载合作伙伴表格</a>
                        </div>
                    </div>
                </div>
                <div className="header-bg"></div>
            </div>
        )
    }
}

export default Partners;