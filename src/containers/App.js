import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import {
  NavBar,
  About,
  Intro,
  HeaderBody,
  Shops,
  Commitments,
  Footer,
  Events,
  Partner,
  Video,
  UserForm,
} from '../components/';

import GoodsDetailContainer from './GoodsDetailContainer';
import ShopCartContainer from './ShopCartContainer';



let currentGood = 1;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      isLoggedIn: false,
      loginModalVisible: false,
      cartModalVisible: false,
      goodsItemModalVisible: false,
      videoModalVisible: false,
    };

  }

  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  }

  showModal = (type, goodId) => {

    if (goodId) {
      currentGood = goodId;
    }


    this.setState({
      [type]: true,
    });
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = async () => {

    await localStorage.removeItem('token');

    this.setState({
      isLoggedIn: false,
    });
  }

  componentDidMount = async () => {

    const token = await localStorage.getItem('token');


    if (token) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }


  changeRadio = (e) => {
  }

  render() {

    return (
      <div>
          <ul id="slider" style={{ zIndex: -1, position: 'absolute', listStyle: 'none', width: '100%', height: '100%', padding: 0, margin: 0 }} className="hde">
              <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s1.jpg"/></li>
              <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s2.jpg"/></li>
              <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s3.jpg"/></li>
          </ul>
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            showLoginModal={this.showModal}
            showCartModal={this.showModal}
            handleLogout={this.handleLogout}
          />

          {
            this.state.cartModalVisible && (
              <ShopCartContainer
                cartModalVisible={this.state.cartModalVisible}
                hideCartModal={this.handleCancel}
                history={this.props.history}
              />
            )
          }

          <UserForm
            loginModalVisible={this.state.loginModalVisible}
            handleLogin={this.handleLogin}
            hideLoginModal={this.handleCancel}
            history={this.props.history}
          />

          <HeaderBody />

          <About
            videoModalVisible={this.state.videoModalVisible}
            handlePlayVideo={this.showModal}
            handleCancelVideo={this.handleCancel}
           />

          <Video
            videoModalVisible={this.state.videoModalVisible}
            handleCancel={this.handleCancel}
          />

          <Shops
            showGoodItemModal={this.showModal}
          />

          <Intro />

          <Events />

          {
            this.state.goodsItemModalVisible && (
              <GoodsDetailContainer
                currentGood={currentGood}
                handleCancel={this.handleCancel}
                goodsItemModalVisible={this.state.goodsItemModalVisible}
              />
            )
          }

          <Partner />

          <Commitments />
          <Footer />

      </div>
    );
  }
}

export default App;
