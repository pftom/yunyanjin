import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';



import goods1 from './img/goods-1.png';
import goods2 from './img/goods-2.png';
import goods3 from './img/goods-3.png';
import goods4 from './img/goods-4.png';

class Shops extends Component {

    render() {
        return (
            <div id="shop" className="container-fluid goods">
            <h3 className="goods-title text-center">商品展示</h3>
              <div className="row text-center scrollmenu">
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 1) }}>
                  <div className="thumbnail">
                    <img src={goods1} alt="good1" className="goodItem"/>
                    <p><strong>Paris</strong></p>
                    <p>一口忘忧</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 2) }}>
                  <div className="thumbnail" >
                    <img src={goods2} alt="good2" className="goodItem"/>
                    <p><strong>New York</strong></p>
                    <p>纯天然酿造，不含任何化学物质</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 3) }}>
                  <div className="thumbnail">
                    <img src={goods1} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 4) }}>
                  <div className="thumbnail">
                    <img src={goods1} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 5) }}>
                  <div className="thumbnail">
                    <img src={goods1} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
              <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 6) }}>
                  <div className="thumbnail">
                    <img src={goods1} alt="good3" className="goodItem"/>
                    <p><strong>San Francisco</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                </div>
              </div>
        )
    }
}

export default Shops;