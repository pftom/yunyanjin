
import React, { Component } from 'react';
// import './css/rubick_pres.css';
// import './css/App.css';
// import './css/modal.css';


import 'antd/dist/antd.css';
import './css/Login.css';
import { Modal, Button, Tabs, Form, Icon, Input, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
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
                    <a className="login-form-forgot remember-password" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登 录
                    </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


export default Form.create()(Login);