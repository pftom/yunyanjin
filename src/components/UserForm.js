import React, { Component } from 'react';

import 'antd/dist/antd.css';

// import login, register, change-password component
import LoginContainer from '../containers/LoginContainer';

import { Modal, Tabs } from 'antd';

const TabPane = Tabs.TabPane;


class UserForm extends Component {

    render() {
        console.log('props', this.props);

        return (
            <Modal
                visible={this.props.loginModalVisible}
                onCancel={() => { this.props.hideLoginModal('loginModalVisible') }}
                width={520}
                footer={null}
                title={null}
            >
                <Tabs
                defaultActiveKey="1"
                onChange={this.changeTab}
                tabBarStyle={{
                    textAlign: 'center',

                }}
                >
                    <TabPane
                        tab="登 录"
                        key="1"
                    >
                        <LoginContainer
                            handleLogin={this.props.handleLogin}
                            history={this.props.history}
                            noRegister={this.props.noRegister}
                            hideLoginModal={this.props.hideLoginModal}
                        />
                    </TabPane>
                </Tabs>

            </Modal>
        )
    }
}


export default UserForm;