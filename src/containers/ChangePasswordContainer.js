import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';

// import presentation component
import { ChangePassword } from '../components/';

// import changepassword async action constants
import { CHANGE_PASSWORD } from '../constants/userConstants';

class ChangePasswordContainer extends Component {
    componentWillReceiveProps (nextProps) {
        const { changePasswordSuccess, changePasswordError } = nextProps;

        if (changePasswordSuccess) {
            this.handleChangePasswordSuccess();
        }

        if (changePasswordError) {
            this.handleChangePasswordError();
        }
    }

    handleChangePasswordSuccess () {
        this.success('修改密码成功！');
    }

    handleChangePasswordError () {
        this.error('修改密码失败！');
    }

    handleSubmit = (form) => {
        form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                const { oldPassword, password } = values;
                const body = {
                    old_password: oldPassword,
                    new_password: password,
                };

                const token = await localStorage.getItem('token');

                const { dispatch } = this.props;
                dispatch({ type: CHANGE_PASSWORD, payload: { body, token } });
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
        console.log('props', this.props);

        return (
            <ChangePassword
                onSubmit = {this.handleSubmit}
            />
        )
    }
}

export default connect(
    state => ({
        token: state.getIn(['user', 'token']),
        changePasswordSuccess: state.getIn(['user', 'changePasswordSuccess']),
        changePasswordError: state.getIn(['user', 'changePasswordError']),
    }),
)(ChangePasswordContainer);

