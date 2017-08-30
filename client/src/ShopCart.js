import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import './css/ShopCart.css'

import {  base, userApi } from './config/config';
import request from './config/request';

import good1 from './img/goods-1.jpg';
import wechat from './img/wechat_pay.png';


import { Modal, Button, Tabs, Form, Icon, Input, Checkbox, message } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class ShopCart extends Component {
    render() {
        return (
            <Modal
               visible={this.props.cartModalVisible}
                onCancel={() => { this.props.hideCartModal('cartModalVisible') }}
                width={899}
                footer={null}
                title={null}
                className="shop-cart-container"
            >
                <div className="container-fluid shop-cart">
                    <div className="col-sm-7 shop-cart-left">

                        <h3 className="text-center">我 的 购 物 车</h3>

                        <div className="row cart-item-header cart-item-body">
                            <div className="col-sm-5 ">
                                <span>商品名称</span>
                            </div>  
                            <div className="col-sm-2 text-center">
                                <span>商品规格</span>
                            </div>
                            <div className="col-sm-2 text-center">
                                <span>商品数量</span>
                            </div>
                            <div className="col-sm-3 text-left">
                                <span>价格</span>
                            </div>
                        </div>


                        <div className="row cart-item-body">
                            <div className="col-sm-5 ">
                                <img src={good1} alt="good1" /> 
                                <span className="good-img-title">盐津乌骨鸡</span>
                            </div>  
                            <div className="col-sm-2 text-center">
                                <span>118g</span>
                            </div>
                            <div className="col-sm-2 text-center">
                                <span className="item-count">2</span>
                            </div>
                            <div className="col-sm-3 item-price text-left">
                                <span>￥666</span>
                                <Icon type="close" className="item-price-close"/>
                            </div>
                        </div>

                        <div className="row cart-item-body">
                            <div className="col-sm-5 ">
                                <img src={good1} alt="good1" /> 
                                <span className="good-img-title">盐津乌骨鸡</span>
                            </div>  
                            <div className="col-sm-2 text-center">
                                <span>118g</span>
                            </div>
                            <div className="col-sm-2 text-center">
                                <span className="item-count">2</span>
                            </div>
                            <div className="col-sm-3 item-price text-left">
                                <span>￥666</span>
                                <Icon type="close" className="item-price-close"/>
                            </div>
                        </div>

                        <div className="row cart-item-body">
                            <div className="col-sm-5 ">
                                <img src={good1} alt="good1" /> 
                                <span className="good-img-title">盐津乌骨鸡</span>
                            </div>  
                            <div className="col-sm-2 text-center">
                                <span>118g</span>
                            </div>
                            <div className="col-sm-2 text-center">
                                <span className="item-count">2</span>
                            </div>
                            <div className="col-sm-3 item-price text-left">
                                <span>￥666</span>
                                <Icon type="close" className="item-price-close"/>
                            </div>
                        </div>

                        <div className="breakwidth-30 row"></div>
                        <div className="row text-right total-price-title">
                            共需支付
                        </div>
                        <div className="row total-price text-right">
                            ￥666.27
                        </div>

                        <div className="breakwidth-60 row"></div>

                        <div className="row return-homepage">
                            <Button type="Default" onClick={() => { this.props.hideCartModal('cartModalVisible')}}>返回首页</Button>
                        </div>

                    </div>
                    <div className="col-sm-5 check-out-box">
                        <h3 className="text-center">结 账</h3>
                        <Tabs type="card">
                            <TabPane tab="微信支付" key="1">
                                <div className="row wechat_pay_box">
                                    <img src={wechat} alt="wechat" className="wechat" />
                                </div>
                            </TabPane>
                            <TabPane tab="支付宝支付" key="2">
                                <div className="row wechat_pay_box">
                                    <img src={wechat} alt="wechat" className="wechat" />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ShopCart;