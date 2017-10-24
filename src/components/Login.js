import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Login.css';

import { Button, Form, Icon, Input, Checkbox, message } from 'antd';

const FormItem = Form.Item;


function Login (props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = props.form;
        
        props.onSubmit(form);

    }

    const { getFieldDecorator } = props.form;

    return (
        <div className="container-fluid login-box">
            <Form onSubmit={onSubmit} className="login-form">
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
                        !props.noRegister && (
                            <div className="already-user text-center">
                                还没账号？<Link to="/register" className="text-blue">马上注册</Link>
                            </div>
                        )
                    }
                </FormItem>
            </Form>
        </div>
    )
}


export default Form.create()(Login);