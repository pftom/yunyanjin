import React, { Component } from 'react';

// import css file
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

// Presentation component
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
  LoadableVideo,
  UserForm,
  BackgroundImg,
} from '../components/';

// Container component
import GoodsDetailContainer from './GoodsDetailContainer';
import ShopCartContainer from './ShopCartContainer';

class App extends Component {
  currentGood = 1;

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
      this.currentGood = goodId;
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
          <BackgroundImg />

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

          <LoadableVideo
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
                currentGood={this.currentGood}
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
