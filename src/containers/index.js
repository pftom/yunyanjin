import React, { Component } from 'react';
import Loadable from 'react-loadable';

// The basic loading function for all loading;
function Loading(props) {
    if (props.error) {
        return <div>Error!</div>
    } else if (props.timeOut) {
        return <div>Taking a long time...</div>
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}


// construc basic loadable component
const constructLoadable = (componentPath) => (
    Loadable({
        loader: () => import(`${componentPath}`),
        loading: Loading,
        timeout: 10000,
    })
);


// Register dynamic loading function
const LoadableRegister = constructLoadable('./RegisterContainer');

function YjRegister(props) {
    return <LoadableRegister {...props} />
}

// ChangePassword dynamic loading function
const LoadableChangePassword = constructLoadable('./ChangePassword');

function YjChangePassword(props) {
    return <LoadableChangePassword {...props} />
}

// GoodsDetail dynamic loading function
const LoadableGoodsDetail = constructLoadable('./GoodsDetail');

function YjGoodsDetail(props) {
    return <LoadableGoodsDetail {...props} />
}

// ShopCart dynamic loading function
const LoadableShopCart = constructLoadable('./ShopCart');

function YjShopCart(props) {
    return <LoadableShopCart {...props} />
}


export {
    Loading,

    YjRegister,
    YjChangePassword,

    YjGoodsDetail,
    YjShopCart,
}