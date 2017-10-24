/*
 * import React for the requirement of React Framework.
 * import Component for build LoginContainer with extend it.  
 * import Link for routing to other page.
 * import `antd` for use component already in production.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Icon, Input, Checkbox, message } from 'antd';

// Presentational Login component
import Login from '../components/Login';

// import async action constants
import { LOGIN } from '../constants/userConstants';

const FormItem = Form.Item;


class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginModalVisible: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { loginSuccess, loginError } = nextProps;

        if (loginSuccess) {
            this.handleLoginSuccess();
        }

        if (loginError) {
            this.handleLoginError();
        }
    }

    handleLoginSuccess() {
        this.success('登录成功！');

        setTimeout(() => {
            this.props.hideLoginModal('loginModalVisible');
        }, 2000);

        const location = {
            pathname: '/',
        };

        this.props.history.push(location);
    }

    handleLoginError() {
        this.error('账号或密码错误，登录失败！');
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

            const { dispatch } = this.props;
            dispatch({ type: LOGIN, payload: { body }});
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


export default connect(
    state => ({
        loginSuccess: state.getIn(['user', 'loginSuccess']),
        loginError: state.getIn(['user', 'loginError']),
    }),
)(LoginContainer);