import React, { Component } from 'react';

import 'antd/dist/antd.css';

// import login, register, change-password component
import LoginContainer from '../containers/LoginContainer';

import { Modal, Tabs } from 'antd';

const TabPane = Tabs.TabPane;


function UserForm (props){
    return (
        <Modal
            visible={props.loginModalVisible}
            onCancel={() => { props.hideLoginModal('loginModalVisible') }}
            width={520}
            footer={null}
            title={null}
        >
            <Tabs
            defaultActiveKey="1"
            tabBarStyle={{
                textAlign: 'center',
            }}
            >
                <TabPane
                    tab="登 录"
                    key="1"
                >
                    <LoginContainer
                        handleLogin={props.handleLogin}
                        history={props.history}
                        noRegister={props.noRegister}
                        hideLoginModal={props.hideLoginModal}
                    />
                </TabPane>
            </Tabs>

        </Modal>
    );
}


export default UserForm;