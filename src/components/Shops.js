import React, { Component } from 'react';
import './css/shop.css';
import { Icon } from 'antd';

class Shops extends Component {

    render() {
        return (
            <div id="shop" className="container-fluid goods">
            <h3 className="sector-title text-center">商品展示</h3>
              <div className="row text-center scrollmenu">
                <div className="row slideanim">
                <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 1) }}>
                  <div className="thumbnail">
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/1.jpg'} alt="good1" className="lazyload goodItem"/>
                    <p><strong className="title-align">盐津乌骨鸡 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>集口味美、保健、药用于一体</p>

                  </div>
                </div>
                <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 2) }}>
                  <div className="thumbnail" >
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/2.jpg'} alt="good2" className="lazyload goodItem"/>
                    <p><strong className="title-align">昭通天麻 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>畅销国内外的名贵中药</p>
                  </div>
                </div>
                <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 3) }}>
                  <div className="thumbnail">
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/3.jpg'} alt="good3" className="lazyload goodItem"/>
                    <p><strong className="title-align">盐津干竹笋 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>中国传统佳肴，原生态食品</p>
                  </div>
                </div>
                </div>
                <div className="row  slideanim">
                <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 4) }}>
                  <div className="thumbnail">
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/4.jpg'} alt="good3" className="lazyload goodItem"/>
                    <p><strong className="title-align">盐津乌骨鸡蛋 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>上等滋补佳品</p>
                  </div>
                </div>
                <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 5) }}>
                  <div className="thumbnail">
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/5.jpg'} alt="good3" className="lazyload goodItem"/>
                    <p><strong className="title-align">盐津农家蜂蜜 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>盐津农户自产蜂蜜，原生态产品</p>
                  </div>
                </div>
              <div className=" good-item" onClick={() => { this.props.showGoodItemModal('goodsItemModalVisible', 6) }}>
                  <div className="thumbnail">
                    <img data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/6.jpg'} alt="good3" className="lazyload goodItem"/>
                    <p><strong className="title-align">苗岭碧芽茶叶 <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                    <p>名优绿茶和苦丁茶系列产品</p>
                  </div>
                </div>
                </div>
                </div>
              </div>
        )
    }
}

export default Shops;