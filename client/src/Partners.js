import React, { Component } from 'react';

import './css/Partner.css';
import { data } from './data'

import { Table, Button } from 'antd';


// con
const columns = [{
    title: '企业名称',
    dataIndex: 'firmName',
}, {
    title: '企业电话',
    dataIndex: 'firmPhone',
}, {
    title: '联络员姓名',
    dataIndex: 'personName',
}, {
    title: '联络员电话',
    dataIndex: 'personPhone',
}, {
    title: '企业地址',
    dataIndex: 'address',
}]

class Partners extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRowKeys: [],
        };
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const { selectedRowKeys } = this.state;


        return (
            <div className="container-fluid partner" id="partner">
                <h3 className="sector-title text-center">合作伙伴</h3>
                <div className="tab-box">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }
}

export default Partners;