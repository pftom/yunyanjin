import React, { Component } from 'react';

import './css/Commitments.css';

import commit1 from './img/commit-1.svg';
import commit2 from './img/commit-2.svg';
import commit3 from './img/commit-3.svg';
import commit4 from './img/commit-4.svg';

const DATA = [
    {
        title: '正品保证',
        content: '严格控制供应渠道，全部商品均由品牌供应商直接采购供货，品质有保障。',
        image: commit1,
    },
    {
        title: '支持退换货',
        content: '支持退换货，退换货请在商品收到的七天内进行退换货申请，并将商品寄回。',
        image: commit2,
    },
    {
        title: '尽快发货',
        content: '我们会尽快安排发货，在发货后一般会在2-7天左右送达。',
        image: commit3,
    },
    {
        title: '关于色差',
        content: '所卖商品均为实物拍摄，因此难免会由于灯光等原因出现略微色差，一切以实物为准。',
        image: commit4,
    },
];

function Commitments(props) {
    const renderNormal = 'col-sm-6 commit';
    const renderBottom = 'col-sm-6 commit commit-bottom';
    return (
        <div className="container-fluid commitments" id="commitments">
            <h3 className="sector-title text-center ">我们的承诺</h3>
            <div className="row slideanim">
            {
                DATA.map((item, key) => (
                    <div className={key < 2 ? renderNormal : renderBottom} key={key}>
                        <img className="lazyload" data-src={item.image} alt={item.title} /><br />
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Commitments;