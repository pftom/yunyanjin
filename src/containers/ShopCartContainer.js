import React, { Component } from 'react';
import { message } from 'antd';

import ShopCart from '../components/ShopCart';

import {  base, cartSingleApi } from '../config/config';
import request from '../config/request';


class ShopCartContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allProducts: null,
            alreadyLoaded: false,
            totalPrice: 0,
            allNoRepProducts: [],
            allNoRepProductsCount: [],
            countEveryProductCount: {
                '1': 0,
                '2': 0,
                '3': 0,
                '4': 0,
                '5': 0,
                '6': 0,
            },
        }
    }

    componentDidMount() {
        // get all cart item
        this.getAllCart();
    }

    getAllCart = async () => {

        const { countEveryProductCount, allNoRepProducts, allNoRepProductsCount } = this.state;
        try {
            const token = await localStorage.getItem('token');

            const allProducts = await request.get(base + cartSingleApi().allProducts, null, token);

            console.log('allProducts', allProducts);
            let totalPrice = 0;

            allProducts.map(item => {
                totalPrice += Number(item.item.price);
                countEveryProductCount[`${item.item.id}`]++;
                return item;
            })


            Object.keys(countEveryProductCount).map(item => {
                if (countEveryProductCount[item] > 0) {
                    let flag = false;
                    allProducts.map(goodItem => {
                        if (!flag && goodItem.item.id === Number(item)) {
                            allNoRepProducts.push(goodItem);
                            allNoRepProductsCount.push(countEveryProductCount[item]);
                            flag = true;
                        }
                        return goodItem;
                    })
                }

                return item;
            })

            console.log('allNoRepProducts', allNoRepProducts, 'allNoRepProductsCount', allNoRepProductsCount);

            this.setState({
                allProducts,
                alreadyLoaded: true,
                allNoRepProductsCount,
                allNoRepProducts,
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

            console.log('token', token);
            console.log('item', item);

            await request.delete(base + cartSingleApi(item.item.id).deleteSingleProduct, token);

            this.getAllCart();

            this.success('删除商品成功！');

        } catch(err) {
            this.error('删除商品失败！请检查网络连接！');
        }
    }

    render() {
        // prop
        const {
            allNoRepProducts,
            allNoRepProductsCount,
            totalPrice,
            alreadyLoaded,
            allProducts,
        } = this.state;

        return (
            <ShopCart 
                {...this.props}
                deleteCartItem={this.deleteCartItem}
                allNoRepProducts = {allNoRepProducts}
                allNoRepProductsCount = {allNoRepProductsCount}
                totalPrice = {totalPrice}
                alreadyLoaded = {alreadyLoaded}
                allProducts = {allProducts}
            />
        )
    }
}

export default ShopCartContainer;