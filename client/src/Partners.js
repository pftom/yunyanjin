import React, { Component } from 'react';

import './css/Partner.css';

import { Table, Button } from 'antd';


const data = [{
    key: '1',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '3',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '4',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '5',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '6',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '7',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '8',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '9',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '10',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},{
    key: '11',
    firmName: 'Powerformer',
    firmPhone: '021-7777777',
    personName: '黄大侠',
    personPhone: 13786683333,
    address: 'New York No. 1 Lake Park',
},];

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