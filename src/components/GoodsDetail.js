import React from 'react';
import { Modal, Button, Tabs, Radio, Pagination, Rate, Icon, notification, message, Spin } from 'antd';

// css and image file
import './css/GoodDetail.css';
import avatar1 from './img/img_avatar1.png';

// http request api and request function
import { base, shopSingleApi } from '../config/config';
import request from '../config/request';

// SubComponent of antd component
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

function GoodsDetail(props) {
        const { 
          // prop item
          goodItemContent, 
          currentBuyItem, 
          goodsItemModalVisible,
          alreadyLoaded,
          currentPrice,
          norms,
          goodAllBuyItem,
          count,
          current,


          // method
          handleNormsChange,
          handleCancel,
          changeTab,
          handleCountMinus,
          handleCountChange,
          handleCountAdd,
          handleAddToCart,
          changePagination,
        } = props;

        let renderDetail = null;

        if (goodItemContent && goodItemContent.effect) {
          renderDetail = (
            <div className="container-fluid detail-box">
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3  style={{ marginBottom: '30px'}}>营养成分</h3>
                  <p>{goodItemContent.nutrition}</p>
              </div>
              <div className="row" style={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
                  <h3 style={{ marginBottom: '30px'}}>用途功效</h3>
                  <p>{goodItemContent.effect}</p>
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
              visible={goodsItemModalVisible}
              onCancel={() => { handleCancel('goodsItemModalVisible') }}
              width={900}
              footer={null}
              className="modal-good-container"
            >
            {
              alreadyLoaded
              ? (
                goodItemContent && (
                  <Tabs
                    defaultActiveKey="1"
                    onChange={changeTab}
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
                        <img src={goodItemContent.image} alt="good1" className="good-info-item"/>
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
                              {currentPrice}</span>
                            </span>
                          </div>
                        </div>

                        <div className="norms-box">
                          <span className="norms">购买规格：</span>
                          <RadioGroup defaultValue={norms} onChange={handleNormsChange}>
                            {
                              goodAllBuyItem.map((item, key) => (
                                <RadioButton key={key} value={item.description || item.unit}>{item.description || item.unit}</RadioButton>
                              ))
                            }
                          </RadioGroup>
                        </div>

                        <div className="count-select-box">
                          <span className="norms count-select align-center">数量选择：</span>
                          <span className="count-box">
                            <a className="yj-count" onClick={handleCountMinus}>
                              <Icon type="minus" style={{ color: '#3C3C3C', fontWeight: 'bold' }} />
                            </a>
                            <input type="text" value={count} onChange={handleCountChange} />
                            <a className="yj-count" onClick={handleCountAdd}>
                              <Icon type="plus" style={{ color: '#3C3C3C', fontWeight: 'bold' }}/>
                            </a>
                            &nbsp; {currentBuyItem.unit}(库存{currentBuyItem.stock})
                          </span>
                        </div>
                        <div className="col-sm-6 add-to-cart-box">
                          <Button type="primary" className="btn-goods-item" onClick={handleAddToCart}>
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
                      {
						  [1, 2, 3, 4, 5, 6, 7].map((item, key) => (
							<div className="media col-sm-8 comment-item" key={key}>
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
						  ))
					  }
                      <div className="partition" />
                      <Pagination current={current} onChange={changePagination} total={50} />
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
        );
}

export default GoodsDetail;