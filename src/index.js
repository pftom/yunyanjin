import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route
 } from 'react-router-dom';

 import { YjRegister, YjChangePassword } from './containers/';


 const BasicApp = () => (
     <Router forceRefresh={true}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/register" component={YjRegister} />
            <Route path="/change_password" component={YjChangePassword} />
        </div>
     </Router>
 )

ReactDOM.render(<BasicApp />, document.getElementById('root'));
registerServiceWorker();
