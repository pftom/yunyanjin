import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import './css/ShopCart.css'

import {  base, cartSingleApi } from './config/config';
import request from './config/request';

import wechat from './img/wechat_pay.png';

import goods1 from './img/goods-1.png';
import goods2 from './img/goods-2.png';
import goods3 from './img/goods-3.png';
import goods4 from './img/goods-4.png';

import { Modal, Button, Tabs, Form, Icon, Input, Checkbox, message, Spin } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class ShopCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allProducts: null,
            alreadyLoaded: false,
            totalPrice: 0,
        }
    }

    componentDidMount = async () => {
        try {
            const token = await localStorage.getItem('token');
            
            const allProducts = await request.get(base + cartSingleApi().allProducts, null, token);

            console.log('allProducts', allProducts);
            let totalPrice = 0;

            allProducts.map(item => {
                totalPrice += Number(item.item.price);
            })

            this.setState({
                allProducts,
                alreadyLoaded: true,
                totalPrice,
            });

            this.success('获取购物车成功！');
        } catch(err) {
            console.log('err', err);
            this.error('获取购物车失败！请登录或者检查网络连接！');
        }
    }

    success = (msg) => {
        message.success(msg);
    }

    error = (msg) => {
        message.error(msg);
    }

    deleteCartItem = async (item) => {
        try {
            const token = await localStorage.getItem('token');

            await request.delete()

        } catch(err) {
            this.error('删除商品失败！请检查网络连接！');
        }
    }

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
                {
                    this.state.alreadyLoaded 
                    ? (
                        this.state.allProducts && (
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
                                    {
                                        this.state.allProducts.map((item, key) => (
                                            <div className="row cart-item-body" key={key}>
                                                <div className="col-sm-5 ">
                                                    <img src={item.photo} alt="good1" /> 
                                                    <span className="good-img-title">{item.item.description}</span>
                                                </div>  
                                                <div className="col-sm-2 text-center">
                                                    <span>{item.item.unit}</span>
                                                </div>
                                                <div className="col-sm-2 text-center">
                                                    <span className="item-count">{item.quantity}</span>
                                                </div>
                                                <div className="col-sm-3 item-price text-left">
                                                    <span>￥{item.quantity * item.item.price}</span>
                                                    <Icon type="close" className="item-price-close" onClick={(item) => { this.deleteCartItem(item) }}/>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div className="breakwidth-30 row"></div>
                                    <div className="row text-right total-price-title">
                                        共需支付
                                    </div>
                                    <div className="row total-price text-right">
                                        ￥{this.state.totalPrice}
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
                        )
                    )
                    : (
                        <div className="good-item-modal">
                            <Spin tip="加载中..." />
                        </div>
                    )
                }
            </Modal>
        )
    }
}

export default ShopCart;