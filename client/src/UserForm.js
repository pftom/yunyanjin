
import React, { Component } from 'react';
// import './css/rubick_pres.css';
// import './css/App.css';
// import './css/modal.css';




import 'antd/dist/antd.css';
import './css/Login.css';
import login from './img/login.svg';
import register from './img/sketch_logo.jpg';


//import login, register, change-password component
import Login from './Login';
import Register from './Register';
import ChangePassword from './ChangePassword';

import { Modal, Button, Tabs } from 'antd';

const TabPane = Tabs.TabPane;




class UserForm extends Component {

    render() {

        return (
            <Modal
                visible={this.props.loginModalVisible}
                onCancel={this.props.hideLoginModal}
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
                        <Login 
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