import React, { Component } from 'react';
import './css/shop.css';
import { Icon } from 'antd';

const DATA = [
  [
    {
      title: '盐津乌骨鸡',
      content: '集口味美、保健、药用于一体',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/1.jpg',
    },
    {
      title: '昭通天麻',
      content: '畅销国内外的名贵中药',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/2.jpg',
    },
    {
      title: '盐津干竹笋',
      content: '中国传统佳肴，原生态食品',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/3.jpg',
    }
  ],
  [
    {
      title: '盐津乌骨鸡蛋',
      content: '上等滋补佳品',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/4.jpg',
    },
    {
      title: '盐津农家蜂蜜',
      content: '盐津农户自产蜂蜜，原生态产品',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/5.jpg',
    },
    {
      title: '苗岭碧芽茶叶',
      content: '名优绿茶和苦丁茶系列产品',
      image: 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/goods/6.jpg',
    }
  ],
];

function Shops(props) {
    return (
        <div id="shop" className="container-fluid goods">
          <h3 className="sector-title text-center">商品展示</h3>
          <div className="row text-center scrollmenu">
            {
              DATA.map((itemTop, keyTop) => (
                <div className="row  slideanim">
                {
                  itemTop.map((item, key) => (
                    <div className=" good-item" onClick={() => { props.showGoodItemModal('goodsItemModalVisible', (keyTop * itemTop.length) + (key + 1)) }}>
                      <div className="thumbnail">
                        <img data-src={item.image} alt="good3" className="lazyload goodItem"/>
                        <p><strong className="title-align">{item.title} <Icon type="right" style={{ fontSize: '12px' }}/></strong></p>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))
                }
                </div>
              ))
            }
          </div>
        </div>
    );
}

export default Shops;