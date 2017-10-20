import React, { Component } from 'react';
import { Button, Form, Icon, Input } from 'antd';
import './css/Register.css';
import { Link } from 'react-router-dom';

import { userApi, base } from '../config/config';
import request from '../config/request'

import { message } from 'antd';

const FormItem = Form.Item;

class ChangePassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comfirmDirty: false,
        }
    }

    async componentDidMount() {
        const token = await localStorage.getItem('token');
        console.log('token', token);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                try {
                    const { oldPassword, password } = values;

                    const body = {
                        old_password: oldPassword,
                        new_password: password,
                    };

                    const token = await localStorage.getItem('token');

                    await request.post(base + userApi.changePassword, body, token);

                    this.success('修改密码成功！');
                } catch (err) {
                    this.error('修改密码失败！');
                }
            } else {
                this.error('修改密码失败！');
            }
        });
  }
   success = (msg) => {
       message.success(msg);
   }

    error = (msg) => {
        message.error(msg);
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


            <div>
                <div className="register-nav-bar">
                    <div className="container">
                        <Link to="/">
                            <svg  className="register-logo" width="63px" height="47px" viewBox="0 0 63 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>logo</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="index" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Tablet" transform="translate(-238.000000, -634.000000)" stroke="#FFFFFF" strokeWidth="2">
                                        <g id="logo" transform="translate(239.000000, 635.000000)">
                                            <path d="M22.0502327,28.0829597 C22.0502327,28.0829597 15.0941292,30.791531 9.49231125,28.0829597 C3.89049333,25.3743884 7.75636327,18.4182849 7.75636327,18.4182849 C7.75636327,18.4182849 9.88628525,13.1981293 17.4210381,15.1310642 C17.4210381,15.1310642 27.8490377,-2.15454535 38.8679982,14.7001552 C38.8679982,14.7001552 48.7173484,9.91090863 50.8472704,20.5358951 C52.9771923,31.1608817 35.7777646,29.2771934 35.7777646,29.2771934" id="XMLID_306_"></path>
                                            <path d="M24.8819209,44.8514784 L56.4367766,44.8514784 C35.051375,36.0486217 2.85631156,44.2482057 2.85631156,44.2482057 C7.10384382,38.0677385 29.1171415,36.5164658 29.1171415,36.5164658 L29.2525701,25.4359469 L22.8381808,18.3690381" id="XMLID_305_"></path>
                                            <path d="M0.92337658,22.9982327 C-1.9083116,18.7507004 3.49651932,15.4019214 3.49651932,15.4019214 C2.72088299,8.32270091 10.8342852,10.2556359 10.8342852,10.2556359 C13.9491422,2.5115843 21.1391678,7.54706458 21.1391678,7.54706458" id="XMLID_303_"></path>
                                            <path d="M39.8283098,8.44581779 C39.1881021,1.36659734 32.2319985,2.64701286 32.2319985,2.64701286 C27.4673753,-3.27490894 21.6685704,2.64701286 21.6685704,2.64701286" id="XMLID_302_"></path>
                                            <path d="M35.4699724,18.8491939 L29.6465441,24.6356872" id="XMLID_301_"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            <div className="container-fluid register-box">
                <div className="row register-box-row text-center">
                            <div className="col-sm-3">
                                <h4>密码重置</h4>
                            </div>
                        </div>
                        <div className="row register-box-row">
                            <div className="register-box-row-item">
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
                </div>
                </div>
                <div className="il_footer text-center" id="il_footer">
                    <span className="project-name">云梦盐津公益项目</span>
                    <span className="license">This project follow <a href="">MIT License</a></span>
                </div>
                </div>
        )
    }
}

export default Form.create()(ChangePassword);