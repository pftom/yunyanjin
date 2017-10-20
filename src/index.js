import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route
 } from 'react-router-dom';

 import Register from './containers/Register.js';
 import ChangePassword from './containers/ChangePassword.js';


 const BasicApp = () => (
     <Router forceRefresh={true}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/change_password" component={ChangePassword} />
        </div>
     </Router>
 )

ReactDOM.render(<BasicApp />, document.getElementById('root'));
registerServiceWorker();
