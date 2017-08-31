import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import commit1 from './img/commit-1.svg'
import commit2 from './img/commit-2.svg'
import commit3 from './img/commit-3.svg'
import commit4 from './img/commit-4.svg'

class Commitments extends Component {
    render() {
        return (
            <div className="container-fluid commitments">
                <h3 className="sector-title text-center ">我们的承诺</h3>
                <div className="row  slideanim">
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
                </div>
                <div className="row slideanim">
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
            </div>
        )
    }
}

export default Commitments;