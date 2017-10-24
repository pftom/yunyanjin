import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { message } from 'antd';

import Register from '../components/Register';

// import async action constants
import { REGISTER } from '../constants/userConstants';

class RegisterContainer extends Component {

    componentWillReceiveProps (nextProps) {
        const { registerSuccess, registerError } = nextProps;

        if (registerSuccess) {
            this.handleRegisterSuccess();
        }

        if (registerError) {
            this.handleRegisterError();
        }
    }

    handleRegisterSuccess () {
        this.success('注册成功！');
        
        const location = {
            pathname: '/',
        };
        this.props.history.push(location);
    }

    handleRegisterError () {
        this.error('注册失败！');
    }

    handleSubmit =  (form) => {
        form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                // build body object for register
                const { username, password } = values;
                const body = {
                    username,
                    password,
                };
                // use react-redux dispatch to fire async register flow
                const { dispatch } = this.props;
                dispatch({ type: REGISTER, payload: { body }});
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

export default connect(
    state => ({
        registerSuccess: state.getIn(['user', 'registerSuccess']),
        registerError: state.getIn(['user', 'registerError']),
    }),
)(RegisterContainer);