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
            <h3 className="sector-title text-center">商品展示</h3>
              <div className="row text-center scrollmenu">
                <div className="row slideanim">
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 1) }}>
                  <div className="thumbnail">
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/1.jpg'} alt="good1" className="goodItem"/>
                    <p><strong>盐津乌骨鸡</strong></p>
                    <p>一口忘忧</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 2) }}>
                  <div className="thumbnail" >
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/2.jpg'} alt="good2" className="goodItem"/>
                    <p><strong>昭通天麻</strong></p>
                    <p>纯天然酿造，不含任何化学物质</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 3) }}>
                  <div className="thumbnail">
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/3.jpg'} alt="good3" className="goodItem"/>
                    <p><strong>盐津干竹笋</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                </div>
                <div className="row  slideanim">
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 4) }}>
                  <div className="thumbnail">
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/4.jpg'} alt="good3" className="goodItem"/>
                    <p><strong>盐津乌骨鸡蛋</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 5) }}>
                  <div className="thumbnail">
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/5.jpg'} alt="good3" className="goodItem"/>
                    <p><strong>盐津农家蜂蜜</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
              <div className="good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 6) }}>
                  <div className="thumbnail">
                    <img src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/6.jpg'} alt="good3" className="goodItem"/>
                    <p><strong>苗岭碧芽茶叶</strong></p>
                    <p>没有最丑，只有更丑</p>
                  </div>
                </div>
                </div>
                </div>
              </div>
        )
    }
}

export default Shops;