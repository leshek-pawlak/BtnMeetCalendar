import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App } from './app'
import { Dashboard } from './pages/dashboard'
import { TimePerDay } from './pages/time_per_day'

'use strict'

ReactDOM.render(
	<div>
	  	<Router history={browserHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={Dashboard}/>
	            <Route path="time_per_day" component={TimePerDay}/>
	        </Route>
	    </Router>
	</div>,
  document.getElementById('root')
)
