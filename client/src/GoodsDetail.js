import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import avatar1 from './img/img_avatar1.png';
import goods1 from './img/goods-1.png';

import { Modal, Button, Tabs, Radio, Pagination, Avatar, Rate, Icon, notification } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class GoodsDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 3,
        }
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

    render() {
        return (
            <Modal
            title="商品"
            visible={this.props.visible}
            onOk={this.props.handleOk}
            onCancel={this.props.handleCancel}
            width={900}

            footer={null}
            title={null}
          >
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
                    <img src={goods1} alt="good1" className="good-info-item"/>
                  </div>
                  <div className="col-sm-6">
                    <div className="good-panel">
                      <h5>盐津乌骨鸡</h5>
                      <p>一口忘忧</p>

                      <div className="iteminfo-price">
                        <span className="price">
                          <span className="yen">¥</span>
                          <span className="price">
                          666</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="norms-box">
                      <span className="norms">生产规格：</span>
                      <RadioGroup>
                        <RadioButton value="first">500g/袋</RadioButton>
                        <RadioButton value="second">300g/袋</RadioButton>
                        <RadioButton value="third">100g/袋</RadioButton>
                      </RadioGroup>
                    </div>

                    <div className="count-select-box">
                      <span className="norms count-select align-center">数量选择：</span>
                      <Pagination simple defaultCurrent={1} total={50} />
                    </div>
                    <button type="submit" onClick={this.openNotification} className="btn btn-success btn-block btn-goods-item">立即购买</button>
                    <button type="submit" className="btn btn-success btn-block btn-goods-item">加入购物车</button>
                  </div>
                </div>
              </TabPane>

              <TabPane
                tab="商品详情"
                key="2"
              >

              <div className="container-fluid detail-box">
                <div className="row detail-box-row">
                <div className="col-sm-3">
                  <span>保质期：</span>
                  <span>270天</span>
                </div>

                <div className="col-sm-3">
                  <span>净含量：</span>
                  <span>250g</span>
                </div>

                <div className="col-sm-3">
                  <span>肉类产品：</span>
                  <span>牛肉干食品工艺</span>
                </div>

              </div>

              <div className="row detail-box-row">

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
              </div>

              </div>


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
          </Modal>
        )
    }
}

export default GoodsDetail;