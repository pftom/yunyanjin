import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/';

import {
    BrowserRouter as Router,
    Route
 } from 'react-router-dom';

//  import { YjRegister, YjChangePassword } from './containers/';
import RegisterContainer from './containers/RegisterContainer';
import ChangePasswordContainer from './containers/ChangePassword';


 const BasicApp = () => (
     <Provider store={store}>
        <Router forceRefresh={true}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/register" component={RegisterContainer} />
                <Route path="/change_password" component={ChangePasswordContainer} />
            </div>
        </Router>
     </Provider>
 )

ReactDOM.render(<BasicApp />, document.getElementById('root'));
registerServiceWorker();
