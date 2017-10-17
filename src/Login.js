import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './css/Login.css';

import { Link } from 'react-router-dom';

import {  base, userApi } from './config/config';
import request from './config/request';

import { Button, Form, Icon, Input, Checkbox, message } from 'antd';

const FormItem = Form.Item;


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginModalVisible: false,
        }
    }




    handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields(async (err, values) => {
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

                    this.props.handleLogin()

                    setTimeout(() => {
                        this.props.hideLoginModal('loginModalVisible');
                    }, 2000);

                    const location = {
                        pathname: '/',
                    };

                    this.props.history.push(location);
                } catch(e) {
                    this.error('登录失败！');
                    console.log('redirect faile')
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

        const { getFieldDecorator } = this.props.form;

        return (
            <div className="container-fluid login-box">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        hasFeedback
                    >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入您的用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的用户名" />
                    )}
                    </FormItem>
                    <FormItem

                        hasFeedback
                    >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的密码" />
                    )}
                    </FormItem>
                    <FormItem className="remember-password-box">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                        {
                            !this.props.noRegister && (
                                <div className="already-user text-center">
                                    还没账号？<Link to="/register" onClick={this.showLoginModal} className="text-blue">马上注册</Link>
                                </div>
                            )
                        }
                    </FormItem>
                </Form>
            </div>
        )
    }
}


export default Form.create()(Login);