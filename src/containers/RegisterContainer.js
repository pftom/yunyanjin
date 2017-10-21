import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { message } from 'antd';

import Register from '../components/Register';

import {  base, userApi } from '../config/config';
import request from '../config/request';

class RegisterContainer extends Component {

    handleSubmit =  (form) => {
        form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const { username, password } = values;

                const body = {
                    username,
                    password,
                };

                try {
                    const { token } = await request.post(base + userApi.register, body);

                    await localStorage.setItem('token', token);

                    this.success('注册成功');

                    const location = {
                        pathname: '/',
                    };

                    this.props.history.push(location);


                } catch(e) {
                    this.error('此账号已经被注册了');
                }
            } else {
                this.error('注册失败！');
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
            <Register 
                onSubmit={this.handleSubmit}
                history={this.props.history}
            />
        )
    }
}

export default RegisterContainer;