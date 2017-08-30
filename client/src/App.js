import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';




import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';


import logo from './img/logo.svg';

import login from './img/login.svg'
import closeIcon from './img/close.svg';

//import Login component 
import UserForm from './UserForm';
import NavBar from './NavBar';
import HeaderBody from './HeaderBody';
import About from './About';
import News from './News';
import Shops from './Shops';
import GoodsDetail from './GoodsDetail';
import Commitments from './Commitments';
import Footer from './Footer';
import ShopCart from './ShopCart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      isLoggedIn: false,
      loginModalVisible: false,
      cartModalVisible: false,
      goodsItemModalVisible: false,
    };

  }

  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  }

  showModal = (type) => {
    this.setState({
      [type]: true,
    });
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  componentDidMount = async () => {

    const token = await localStorage.getItem('token');
    console.log('token', token);

    if (token) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }
  

  changeRadio = (e) => {
    console.log(`radio checked: ${e.target.value}`)
  }

  render() {
    console.log('history', this.props.history);

    return (
      <div>
          <NavBar 
            isLoggedIn={this.state.isLoggedIn}
            showLoginModal={this.showModal}
            showCartModal={this.showModal}
          />

          <ShopCart 
            cartModalVisible={this.state.cartModalVisible}
            hideCartModal={this.handleCancel}
            history={this.props.history}
          />
          
          <UserForm 
            loginModalVisible={this.state.loginModalVisible}
            handleLogin={this.handleLogin}
            hideLoginModal={this.handleCancel}
            history={this.props.history}
          />

          <HeaderBody />
          
          <About />
          
          <News />

          <Shops
            showGoodItemModal={this.showModal}
          />

          <GoodsDetail
            handleCancel={this.handleCancel}
            goodsItemModalVisible={this.state.goodsItemModalVisible} 
          />
          
          <Commitments />
          
          <Footer />
          
      </div>
    );
  }
}

export default App;
