import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from '../components/Login';

import {  base, userApi } from '../config/config';
import request from '../config/request';

import { Button, Form, Icon, Input, Checkbox, message } from 'antd';

const FormItem = Form.Item;


class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginModalVisible: false,
        }
    }

    handleSubmit = (form) => {
        form.validateFields(async (err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);

            const { username, password } = values;

            const body = {
                username,
                password,
            };

            try {
                const { token } = await request.post(base + userApi.login, body);

                await localStorage.setItem('token', token);

                this.success('登录成功！');
                console.log('props', this.props);

                if (this.props.handleLogin) {
                    this.props.handleLogin();
                }


                setTimeout(() => {
                    this.props.hideLoginModal('loginModalVisible');
                }, 2000);

                const location = {
                    pathname: '/',
                };

                this.props.history.push(location);
            } catch(e) {
                this.error('登录失败！');
            }
        } else {
            this.error('登录失败！');
        }
    });
    }
    
    success = (msg) => {
        message.success(msg);
    }

    error = (msg) => {
        message.error(msg);
    }

    render() {

        return (
            <Login 
                onSubmit={this.handleSubmit}
                noRegister={this.props.noRegister}
            />
        )
    }
}


export default LoginContainer;