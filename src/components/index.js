import React from 'react';
import Loadable from 'react-loadable';

import NavBar from './NavBar';
import BackgroundImg from './BackgroundImg';
import About from './About';
import Intro from './Intro';
import HeaderBody from './HeaderBody';
import Shops from './Shops';
import Commitments from './Commitments';
import Footer from './Footer';
import Events from './Events';
import Partner from './Partners';
// import Video from './Video';
import UserForm from './UserForm';
import GoodsDetail from './GoodsDetail';
import ShopCart from './ShopCart';

function Loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.timedOut) {
      return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
}

const constructLoadable = (componentName) => (
    Loadable({
        loader: () => import(`${componentName}`),
        loading: Loading,
        timeout: 10000,
    })
);

const LoadableVideo = constructLoadable('./Video.js');


export {
    NavBar,
    BackgroundImg,
    HeaderBody,
    About,
    Intro,
    Shops,
    Commitments,
    Footer,
    Events,
    Partner,
    LoadableVideo,
    UserForm,
    GoodsDetail,
    ShopCart,
}