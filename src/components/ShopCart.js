import React, { Component } from 'react';
import { Modal, Button, Tabs, Icon, message, Spin } from 'antd';

import './css/ShopCart.css'
import wechat from './img/wechat_pay.png';

const TabPane = Tabs.TabPane;


class ShopCart extends Component {

    render() {
        const {
            // prop
            allNoRepProducts,
            allNoRepProductsCount,
            totalPrice,
            alreadyLoaded,
            allProducts,
            cartModalVisible,

            // method
            hideCartModal,
            deleteCartItem,
        } = this.props;

        console.log('props', this.props);


        return (
            <Modal
               visible={cartModalVisible}
                onCancel={() => { hideCartModal('cartModalVisible') }}
                width={899}
                footer={null}
                title={null}
                className="shop-cart-container"
            >
                {
                    alreadyLoaded
                    ? (
                        allProducts && (
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
                                            <span>单价</span>
                                        </div>
                                    </div>
                                    {
                                        allNoRepProducts.map((item, key) => (
                                            <div className="row cart-item-body min-screen-body" key={key}>
                                                <div className="col-sm-5 ">
                                                    <img src={item.photo} alt="good1" />
                                                    {
                                                        window.innerWidth >= 761 && (<span className="good-img-title">{item.item.description}</span>)
                                                    }
                                                </div>
                                                <div className="col-sm-2 text-center">
                                                    <span>{item.item.unit}</span>
                                                </div>
                                                <div className="col-sm-2 text-center min-screen-adapt-item-count">
                                                    <span className="item-count">{allNoRepProductsCount[key]}</span>
                                                </div>
                                                <div className="col-sm-3 item-price text-left close-box">
                                                    <span>￥{item.quantity * item.item.price}</span>
                                                    <Icon type="close" className="item-price-close" onClick={() => { deleteCartItem(item) }}/>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div className="breakwidth-30 row"></div>
                                    <div className="row text-right total-price-title">
                                        共需支付
                                    </div>
                                    <div className="row total-price text-right">
                                        ￥{totalPrice}
                                    </div>

                                    <div className="breakwidth-60 row"></div>

                                    <div className="row return-homepage">
                                        <Button type="Default" onClick={() => { hideCartModal('cartModalVisible')}}>返回首页</Button>
                                    </div>

                                </div>
                                <div className="col-sm-5 check-out-box">
                                    <h3 className="text-center">结 账</h3>
                                    <div className="check-out-box-tab">
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