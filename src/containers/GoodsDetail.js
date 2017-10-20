import React, { Component } from 'react';
import './css/GoodDetail.css';

import avatar1 from './img/img_avatar1.png';

import {  base, shopSingleApi } from '../config/config';
import request from '../config/request'

import { Modal, Button, Tabs, Radio, Pagination, Rate, Icon, notification, message, Spin } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class GoodsDetail extends Component {

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
        }
    }


    componentDidMount = async () => {
      try {
        const token = await localStorage.getItem('token');
        console.log('currentGood', this.props.currentGood);

        const goodItemContent = await request.get(base + shopSingleApi(this.props.currentGood).productDetail, null, token);
        const goodItemImg = await request.get(base + shopSingleApi(this.props.currentGood).productAllImg, null, token);
        const goodAllBuyItem = await request.get(base + shopSingleApi(this.props.currentGood).productAllBuyItem, null, token);

        console.log('goodItemContent', goodItemContent);
        console.log('goodItemImg', goodItemImg);
        console.log('goodAllBuyItem', goodAllBuyItem);

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
        console.log('Notification was close');
    }

    openNotification = () => {

        notification.config({
            top: 100,
            })

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
        })
    }

    changeTab = (key) => {
        console.log(key);
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
      console.log('text', text);
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
      console.log(e.target.value);
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
        console.log('err', err);
        this.error('加入购物车失败,你还未登录!');
      }
    }

    render() {

        const { goodItemContent } = this.state;

        let renderDetail = null;

        if (goodItemContent && goodItemContent.effect) {
          renderDetail = (
            <div className="container-fluid detail-box">
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3  style={{ marginBottom: '30px'}}>营养成分</h3>
                  <p>{this.state.goodItemContent.nutrition}</p>
              </div>
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3 style={{ marginBottom: '30px'}}>用途功效</h3>
                  <p>{this.state.goodItemContent.effect}</p>
              </div>
            </div>
          )
        } else {
          renderDetail = (
            <div className="container-fluid detail-box">
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3  style={{ marginBottom: '30px'}}>营养成分</h3>
                  <p>{goodItemContent && (goodItemContent.nutrition ? goodItemContent.nutrition : '暂无') }</p>
              </div>
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3 style={{ marginBottom: '30px'}}>用途功效</h3>
                  <p>{goodItemContent && (goodItemContent.effect ? goodItemContent.effect : '暂无')}</p>
              </div>
            </div>
          )
        }

        return (
            <Modal
              title="商品"
              visible={this.props.goodsItemModalVisible}
              onCancel={() => { this.props.handleCancel('goodsItemModalVisible') }}
              width={900}

            footer={null}
            className="modal-good-container"
          >
            {
              this.state.alreadyLoaded
              ? (
                goodItemContent && (
                  <Tabs
                  defaultActiveKey="1"
                  onChange={this.changeTab}
                  tabBarStyle={{
                    textAlign: 'center'
                  }}
                >
                  <TabPane
                    tab="购买商品"
                    key="1"
                  >
                    <div className="container-fluid modal-good-box">
                      <div className="col-sm-6">
                        <img src={this.state.goodItemContent.image} alt="good1" className="good-info-item"/>
                      </div>
                      <div className="col-sm-6">
                        <div className="good-panel">
                          <h5>{goodItemContent.name}</h5>
                          <p>
                            {goodItemContent.description}
                          </p>

                          <div className="iteminfo-price">
                            <span className="price">
                              <span className="yen">¥</span>
                              <span className="price">
                              {this.state.currentPrice}</span>
                            </span>
                          </div>
                        </div>

                        <div className="norms-box">
                          <span className="norms">购买规格：</span>
                          <RadioGroup defaultValue={this.state.norms} onChange={this.handleNormsChange}>
                            {
                              this.state.goodAllBuyItem.map((item, key) => (
                                <RadioButton key={key} value={item.description || item.unit}>{item.description || item.unit}</RadioButton>
                              ))
                            }
                          </RadioGroup>
                        </div>

                        <div className="count-select-box">
                          <span className="norms count-select align-center">数量选择：</span>
                          <span className="count-box">
                            <a className="yj-count" onClick={this.handleCountMinus}>
                              <Icon type="minus" style={{ color: '#3C3C3C', fontWeight: 'bold' }} />
                            </a>
                            <input type="text" value={this.state.count} onChange={this.handleCountChange} />
                            <a className="yj-count" onClick={this.handleCountAdd}>
                              <Icon type="plus" style={{ color: '#3C3C3C', fontWeight: 'bold' }}/>
                            </a>
                            &nbsp; {this.state.currentBuyItem.unit}(库存{this.state.currentBuyItem.stock})
                          </span>
                        </div>
                        <div className="col-sm-6 add-to-cart-box">
                          <Button type="primary" className="btn-goods-item" onClick={this.handleAddToCart}>
                            <Icon type="shopping-cart" style={{ fontSize: 20 }} />
                            加入购物车
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabPane>

                  <TabPane
                    tab="商品详情"
                    key="2"
                  >
                  {renderDetail}

                  </TabPane>


                  <TabPane
                    tab="商品评论"
                    key="3"
                  >
                    <div className="container-fluid comment-box">
                      <div className="media col-sm-8 comment-item">
                        <div className="media-left">
                          <img src={avatar1} alt="avatar1" className="media-object" style={{ width: '60px' }}/>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading text-left">Powerformer Tom</h4>
                          <p className="text-left">Lorem Lorem ipsum... Lorem ipsum...</p>
                          <div className="rate-box">
                            <Rate disabled defaultValue={4} character={<Icon type="heart" />} />
                            <span>2017-08-26 21:03</span>
                          </div>
                        </div>
                      </div>

                      <div className="media col-sm-8 comment-item">
                        <div className="media-left">
                          <img src={avatar1} alt="avatar1" className="media-object" style={{ width: '60px' }}/>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading text-left">Powerformer Tom</h4>
                          <p className="text-left">Lorem Lorem ipsum... Lorem ipsum...</p>
                          <div className="rate-box">
                            <Rate disabled defaultValue={4} character={<Icon type="heart" />} />
                            <span>2017-08-26 21:03</span>
                          </div>
                        </div>
                      </div>

                      <div className="media col-sm-8 comment-item">
                        <div className="media-left">
                          <img src={avatar1} alt="avatar1" className="media-object" style={{ width: '60px' }}/>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading text-left">Powerformer Tom</h4>
                          <p className="text-left">Lorem Lorem ipsum... Lorem ipsum...</p>
                          <div className="rate-box">
                            <Rate disabled defaultValue={4} character={<Icon type="heart" />} />
                            <span>2017-08-26 21:03</span>
                          </div>
                        </div>
                      </div>

                      <div className="media col-sm-8 comment-item">
                        <div className="media-left">
                          <img src={avatar1} alt="avatar1" className="media-object" style={{ width: '60px' }}/>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading text-left">Powerformer Tom</h4>
                          <p className="text-left">Lorem Lorem ipsum... Lorem ipsum...</p>
                          <div className="rate-box">
                            <Rate disabled defaultValue={4} character={<Icon type="heart" />} />
                            <span>2017-08-26 21:03</span>
                          </div>
                        </div>
                      </div>

                      <div className="media col-sm-8">
                        <div className="media-left">
                          <img src={avatar1} alt="avatar1" className="media-object" style={{ width: '60px' }}/>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading text-left">Powerformer Tom</h4>
                          <p className="text-left">Lorem Lorem ipsum... Lorem ipsum...</p>
                          <div className="rate-box">
                            <Rate disabled defaultValue={4} character={<Icon type="heart" />} />
                            <span>2017-08-26 21:03</span>
                          </div>
                        </div>
                      </div>
                      <div className="partition" />
                      <Pagination current={this.state.current} onChange={this.changePagination} total={50} />
                    </div>
                  </TabPane>
                </Tabs>
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

export default GoodsDetail;


/* <div className="col-sm-5">
<Button type="primary" className="btn-goods-item btn-goods-first-item">
  立即购买
</Button>
</div> */



/* <div className="row detail-box-row">

                    <div className="col-sm-3">
                        <span>含糖量：</span>
                        <span>无糖</span>
                    </div>

                    <div className="col-sm-3">
                      <span>包装方式：</span>
                      <span>袋装</span>
                    </div>


                    <div className="col-sm-3">
                      <span>存储方法：</span>
                      <span>避免阳光直射</span>
                    </div>
                  </div>

                  <div className="row detail-box-row">
                    <div className="col-sm-9">
                        <span>食品添加剂：</span>
                        <span>乙基麦芽酶，食用香精</span>
                    </div>
                  </div>

                  <div className="row detail-box-row">
                    <div className="col-sm-9">
                        <span>联系方式：</span>
                        <span>0475-8251032</span>
                    </div>
                  </div>

                  <div className="row detail-box-row">
                    <div className="col-sm-9">
                        <span>厂址：</span>
                      <span>通辽市经济技术开发区8号路西标准厂房厂家</span>
                    </div>
                  </div>

                  <div className="row detail-box-row">
                    <div className="col-sm-9">
                        <span>厂名：</span>
                        <span>内蒙古科尔沁牛业股份有限公司肉制品分公司</span>
                    </div>
                  </div>

                  <div className="row detail-box-row">
                    <div className="col-sm-9">
                        <span>配料表：</span>
                      <span>鲜猪肉，鸡肉，白砂糖，猪油，酱油，食盐，芝麻，海苔，味精，小麦粉</span>
                    </div>
                  </div> */