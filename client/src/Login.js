
import React, { Component } from 'react';
// import './css/rubick_pres.css';
// import './css/App.css';
// import './css/modal.css';


import 'antd/dist/antd.css';
import './css/Login.css';

import { Link, Redirect } from 'react-router-dom';
import UserForm from './UserForm';

import {  base, userApi } from './config/config';
import request from './config/request'

import { Modal, Button, Tabs, Form, Icon, Input, Checkbox, message } from 'antd';
const TabPane = Tabs.TabPane;
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
            }

            const { username, password } = values;

            const body = {
                username,
                password,
            };

            try {
                const { token } = await request.post(base + userApi.login, body);

                await localStorage.setItem('token', token);
                <Redirect to={{ pathname: '/' }} />
            } catch(e) {
                this.error();
               <Redirect to="/" />
                console.log('redirect faile')
            }
        });
    }

    error = () => {
        message.error('登录失败，请检查网络连接');
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div className="container-fluid login-box">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        hasFeedback
                    >
                    {getFieldDecorator('userName', {
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
                        <Link to="/change_password" className="login-form-forgot remember-password">忘记密码</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                        {
                            !this.props.noRegister && (
                                <div>还没账号？<Link to="register">现在注册</Link></div>
                            )
                        }
                    </FormItem>
                </Form>
            </div>
        )
    }
}


export default Form.create()(Login);