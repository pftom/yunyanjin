import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  Video,
  UserForm,
  BackgroundImg,
} from '../components/';

// Container component
import GoodsDetailContainer from './GoodsDetailContainer';
import ShopCartContainer from './ShopCartContainer';

// import action constants
import {
  GET_TOKEN,

  LOGIN,
  LOGOUT,
} from '../constants/userConstants';

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

  handleLogout = async () => {
    // dispatch logout async action
    const { dispatch } = this.props;
    dispatch({ type: LOGOUT });
  }

  componentDidMount = async () => {
    // get dispatch action dispatcher from connect props
    const { dispatch } = this.props;
    
    // dispatch get token action
    dispatch({ type: GET_TOKEN });
  }


  changeRadio = (e) => {
  }

  render() {

    const { token } = this.props;

    return (
      <div>
          <BackgroundImg />

          <NavBar
            isLoggedIn={token ? true : false}
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
            hideLoginModal={this.handleCancel}
            history={this.props.history}
            noRegister={true}
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

export default connect(
  (state) => ({
    token: state.getIn(['user', 'token']),
  }),
)(App);
