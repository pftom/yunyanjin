
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import './css/Login.css';

import login from './img/login.svg';
import register from './img/sketch_logo.jpg';
import { Modal, Button, Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class Login extends Component {

    render() {
        return (
            <Modal
                visible={this.props.loginModalVisible}
                onCancel={this.props.hideLoginModal}
                width={520}
                footer={null}
                title={null}
            >
                <Tabs
                defaultActiveKey="1"
                onChange={this.changeTab}
                tabBarStyle={{
                    textAlign: 'center',

                }}
                >
                    <TabPane
                        tab="登录"
                        key="1"
                    >
                     <div className="container-fluid login-box">
                            <div className="col-sm-6">
                                <img src={login} alt="login" className="login-illustration" />
                            </div>
                            <div className="col-sm-6">
                                <form role="form">
                                    <div className="form-group">
                                    <label for="usrname"><span className="glyphicon glyphicon-user"></span>  用户名</label>
                                    <input type="text" className="form-control" id="usrname" placeholder="输入您的用户名" />
                                    </div>
                                    <div className="form-group">
                                    <label for="psw"><span className="glyphicon glyphicon-eye-open"></span>  密码</label>
                                    <input type="text" className="form-control" id="psw" placeholder="输入您的密码" />
                                    </div>
                                    <div className="checkbox">
                                        <label className="remember-passwd align-center">
                                            <input type="checkbox" value="" />
                                            <span className="align-center">记住密码</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block" onClick={this.props.handleLogin}>登 录</button>
                                </form>
                            </div>
                        </div>
                    </TabPane>

                    <TabPane
                        tab="注册"
                        key="2"
                    >
                        <div className="container-fluid login-box">
                            <div className="col-sm-6 register-left-box">
                                <img src={register} alt="register" className="login-illustration register-illustration" />
                            </div>
                            <div className="col-sm-6">
                                <form role="form">
                                    <div className="form-group first-form-item">
                                    <label for="usrname"><span className="glyphicon glyphicon-user"></span>  用户名</label>
                                    <input type="text" className="form-control" id="usrname" placeholder="输入您的用户名" />
                                    </div>
                                    <div className="form-group">
                                        <label for="psw"><span className="glyphicon glyphicon-eye-open"></span>  密码</label>
                                        <input type="text" className="form-control" id="psw" placeholder="输入您的密码" />
                                    </div>
                                    <div className="form-group">
                                        <label for="psw"><span className="glyphicon glyphicon-ok-circle"></span>  确认密码</label>
                                        <input type="text" className="form-control" id="psw" placeholder="输入您的密码" />
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block" onClick={this.props.handleLogin}>注 册</button>
                                </form>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
        
            </Modal>
        )
    }
}


export default Login;