import React, { Component } from 'react';
import { Modal, Button, Tabs, Form, Icon, Input, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class ChangePassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comfirmDirty: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
  }
    
    handleConfirmBlur = (e) => {
        console.log('blur confirm');
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
        callback('两次密码不一致');
        } else {
        callback();
        }
  }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
        }
        callback();
  }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="container-fluid register-box">
                <Form onSubmit={this.handleSubmit} className="change-password-form">
                    <FormItem
                        hasFeedback
                    >
                    {getFieldDecorator('oldPassword', {
                        rules: [{ required: true, message: '请输入您的旧密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="请输入您的旧密码" />
                    )}
                    </FormItem>
                    <FormItem
                        hasFeedback
                        >
                        {getFieldDecorator('password', {
                            rules: [{
                            required: true, message: '请输入您的新密码',
                            }, {
                            validator: this.checkConfirm,
                            }],
                        })(
                            <Input prefix={<Icon type="safety" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的新密码" />
                        )}
                        </FormItem>

                    <FormItem
                        hasFeedback
                        >
                        {getFieldDecorator('confirm', {
                            rules: [{
                            required: true, message: '请再次输入您的新密码',
                            }, {
                            validator: this.checkPassword,
                            }],
                        })(
                            <Input prefix={<Icon type="safety" style={{ fontSize:13 }} />} type="password" onBlur={this.handleConfirmBlur} placeholder="请再次输入您的新密码" />
                        )}
                        </FormItem>

                    <FormItem className="remember-password-box">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        确 认 修 改
                    </Button>
                    </FormItem>
                </Form>
                </div>
        )
    }
}

export default Form.create()(ChangePassword);