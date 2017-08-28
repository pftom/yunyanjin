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
import Login from './Login';
import NavBar from './NavBar';
import HeaderBody from './HeaderBody';
import About from './About';
import News from './News';
import Shops from './Shops';
import GoodsDetail from './GoodsDetail';
import Commitments from './Commitments';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      isLoggedIn: false,
      loginModalVisible: false,
    };

  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
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
  

  changeRadio = (e) => {
    console.log(`radio checked: ${e.target.value}`)
  }

  showLoginModal = () => {
    this.setState({
      loginModalVisible: true,
    });
  }

  hideLoginModal = () => {
    this.setState({
      loginModalVisible: false,
    });
  }

  render() {
    return (
      <div>

          <NavBar 
            isLoggedIn={this.state.isLoggedIn}
            showLoginModal={this.showLoginModal}
          />
          
          <Login 
            loginModalVisible={this.state.loginModalVisible}
            handleLogin={this.handleLogin}
            hideLoginModal={this.hideLoginModal}
          />

          <HeaderBody />
          
          <About />
          
          <News />

          <Shops
            showModal={this.showModal}
          />

          <GoodsDetail
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
            visible={this.state.visible} 
          />
          
          <Commitments />
          
          <Footer />
          
      </div>
    );
  }
}

export default App;
