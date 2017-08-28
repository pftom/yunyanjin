
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/rubick_pres.css';
import './css/App.css';
import './css/modal.css';

import login from './img/login.svg'


class Login extends Component {
    render() {
        return (
            <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title text-center">登录你的账户</h4>
                    </div>

                    <div className="modal-body container-fluid modal-box">
                        <div className="col-sm-6">
                        <img src={login} alt="login" />
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
                            <label><input type="checkbox" value="" />记住密码</label>
                            </div>
                            <button type="submit" className="btn btn-success btn-block">登 录</button>
                        </form>
                        </div>

                    </div>


                    <div className="modal-footer">
                        <p>没有帐号? 现在<a href="#">注册</a></p>
                    </div>
                    </div>
                    
                </div>
                </div>
        )
    }
}


export default Login;