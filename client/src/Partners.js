import React, { Component } from 'react';

import './css/Partner.css';
import { data } from './data'

import { Table, Button } from 'antd';

const fixIt = {
    
}

// con
const columns = [{
    title: '企业名称',
    dataIndex: 'firmName',
    key: 'firmName',
}, {
    title: '企业电话',
    dataIndex: 'firmPhone',
    key: 'firmPhone',
}, {
    title: '企业地址',
    dataIndex: 'address',
    key: 'address',
},
{
    title: '联络员姓名',
    dataIndex: 'personName',
    key: 'personName',
}, {
    title: '联络员电话',
    dataIndex: 'personPhone',
    key: 'personPhone',
}];

const small_screen_columns = [{
    title: '企业名称',
    dataIndex: 'firmName',
    key: 'firmName',
    width: 170
}, {
    title: '企业电话',
    dataIndex: 'firmPhone',
    key: 'firmPhone',
    width: 100,
}];

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
        const width = window.innerWidth;

        let renderTable = null;
        if (width <= 767) {
            renderTable = (
                <Table columns={small_screen_columns} dataSource={data} />
            )
        } else {
            renderTable = (
                <Table columns={columns} dataSource={data}/>
            )
        }

        return (
            <div className="container-fluid partner" id="partner">
                <h3 className="sector-title text-center">合作伙伴</h3>
                <div className="tab-box">
                    {renderTable}
                </div>
            </div>
        )
    }
}

export default Partners;