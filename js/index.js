import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

import App from './app'
import Pipeline from './containers/pipeline'
import configureStore from './store/configureStore';

'use strict'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
	  	<Router history={browserHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={Pipeline}/>
	        </Route>
	    </Router>
	</Provider>,
  document.getElementById('root')
)