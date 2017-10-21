import React from 'react';
import Loadable from 'react-loadable';

import { Loading } from '../containers/';

import NavBar from './NavBar';
import About from './About';
import Intro from './Intro';
import HeaderBody from './HeaderBody';
import Shops from './Shops';
import Commitments from './Commitments';
import Footer from './Footer';
import Events from './Events';
import Partner from './Partners';

// construc basic loadable component
const constructLoadable = (componentPath) => (
    Loadable({
        loader: () => import(`${componentPath}`),
        loading: Loading,
        timeout: 10000,
    })
);

// Video dynamic loading function
const LoadableVideo = constructLoadable('./Video.js');

function YjVideo(props) {
    return <LoadableVideo {...props} />
}

// UserForm dynamic loading function
const LoadableUserForm = constructLoadable('./UserForm.js');

function YjUserForm(props) {
    return <LoadableUserForm {...props} />
}


export {
    YjUserForm,
    NavBar,
    HeaderBody,
    About,
    Intro,
    Shops,
    Commitments,
    Footer,
    YjVideo,
    Events,
    Partner,
}