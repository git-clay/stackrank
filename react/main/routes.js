import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Link } from 'react-router-dom';

import App from './main-component';
import SignupPage from '../user/signup/SignupPage'

export default (
	<Router>
		<Route path='/' component={App}>
			<Route path='signup' component={SignupPage}/>
		</Route>
	</Router>
)
