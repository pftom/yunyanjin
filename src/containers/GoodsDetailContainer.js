import React, { Component } from 'react';
import { message, notification, Button, Icon } from 'antd';

import { GoodsDetail } from '../components/';

import {  base, shopSingleApi } from '../config/config';
import request from '../config/request';

class GoodsDetailContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 3,
            count: '1',
            norms: '',
            goodItemContent: null,
            goodItemImg: null,
            goodAllBuyItem: null,
            alreadyLoaded: false,
            currentBuyItem: null,
        };
    }


    componentDidMount = async () => {
       
      /*  Fetch for good detail
       *  goodItemContent: The introduction content of this good item.
       *  goodItemImg: The image of this good item.
       *  goodAllBugItem: The all buy item of this good item.
      */
      try {
        const token = await localStorage.getItem('token');

        const goodItemContent = await request.get(base + shopSingleApi(this.props.currentGood).productDetail, null, token);
        const goodItemImg = await request.get(base + shopSingleApi(this.props.currentGood).productAllImg, null, token);
        const goodAllBuyItem = await request.get(base + shopSingleApi(this.props.currentGood).productAllBuyItem, null, token);


        this.setState({
          goodItemContent,
          goodItemImg,
          goodAllBuyItem,
          currentBuyItem: goodAllBuyItem[0],
          norms: goodAllBuyItem[0].description || goodAllBuyItem[0].unit,
          currentPrice: goodAllBuyItem[0].price,
          alreadyLoaded: true,
        });



        this.success('获取商品详情成功！');
      } catch(err) {
        this.error('获取商品详情失败，请登录或检查网络连接！');
      }
    }

    success = (msg) => {
      message.success(msg);
    }

    error = (msg) => {
        message.error(msg);
    }

    closeNotification = () => {
    }

    openNotification = () => {

        notification.config({
            top: 100,
        });

        const key = `open${Date.now()}`;

        const btnClick = function () {
            // to hide notification box
            notification.close(key);
        };

        const btn = (
            <Button type="primary" size="small" onClick={btnClick}>
                Confirm
            </Button>
        );

        notification.open({
          message: '亲，您的产品购买成功啦！',
          description: '点击下方按钮查看订单详情页面',
          icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
          btn,
          key,
          onClose: this.closeNotification,
        });
    }

    changeTab = (key) => {
    }


    changePagination = (page) => {
        this.setState({
            current: page,
        });
    }

    handleCountChange = (event) => {

        const { currentBuyItem } = this.state;
        const text = event.target.value;

        let cnt = 1;
        if (Number(text) < 0 || isNaN(Number(text))) {
            cnt = 1;
        } else if(Number(text) > currentBuyItem.stock) {
            cnt = currentBuyItem.stock;
        } else {
            cnt = Number(text)
        }

        this.setState({
            count: cnt,
            currentPrice: cnt * currentBuyItem.price,
        });
    }

    handleCountAdd = () => {
        let { count, currentBuyItem } = this.state;
            count = Number(count);
        if (count >= currentBuyItem.stock) {
            count = currentBuyItem.stock;
        } else {
            count++;
    }

      this.setState({
        count,
        currentPrice: count * currentBuyItem.price,
      });
    }

    handleCountMinus = () => {
      let { count, currentBuyItem } = this.state;
      count = Number(count);
      if (count > 0) {
        count--;
      }

      this.setState({
        count,
        currentPrice: count * currentBuyItem.price,
      });
    }

    handleNormsChange = (e) => {
      const { goodAllBuyItem, count } = this.state;

      let currentBuyItem = null;
      goodAllBuyItem.map(item => {
        if (item.description || item.unit === e.target.value) {
          currentBuyItem = item;
        }
        return item;
      })


      this.setState({
        norms: e.target.value,
        currentBuyItem,
        currentPrice: count * currentBuyItem.price,
      });
    }


    handleAddToCart = async () => {
      const { currentBuyItem, count } = this.state;

      if (count <= 0 || count >= currentBuyItem.stock) {
        return;
      }

      const body = {
        item: currentBuyItem.id,
        quantity: Number(count),
      };

      try {

        const token = await localStorage.getItem('token');

        await request.post(base + shopSingleApi().productAddToCart, body, token);

        this.success('加入购物车成功！')
      } catch(err) {
        this.error('加入购物车失败,你还未登录!');
      }
    }

    render() {
        
        const {
            current,
            count,
            norms,
            goodItemContent,
            goodItemImg,
            goodAllBuyItem,
            alreadyLoaded,
            currentBuyItem,
            currentPrice,
        } = this.state;

        return (
            <GoodsDetail 
                {...this.props}
                current = {current}
                count = {count}
                norms = {norms}
                currentPrice = {currentPrice}
                goodItemContent = {goodItemContent}
                goodItemImg = {goodItemImg}
                goodAllBuyItem = {goodAllBuyItem}
                alreadyLoaded = {alreadyLoaded}
                currentBuyItem = {currentBuyItem}
                handleNormsChange = {this.handleNormsChange}
                changeTab = {this.changeTab}
                handleCountMinus = {this.handleCountMinus}
                handleCountChange = {this.handleCountChange}
                handleCountAdd = {this.handleCountAdd}
                handleAddToCart = {this.handleAddToCart}
                changePagination = {this.changePagination}
            />
        )
    }
}

export default GoodsDetailContainer;