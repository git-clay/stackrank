import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import App from './main-component';
import Home from '../home/home-component';
import SignupPage from '../user/signup/SignupPage';

export default (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="signup" component={SignupPage} />
		</Route>
)
