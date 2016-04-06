import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './app.jsx';
import Pipeline from './containers/pipeline.jsx';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Pipeline} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
