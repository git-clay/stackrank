// Import all the third party stuff
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';

import store from "./main/store"
import routes from "./main/routes";

//components for pages
import App from './main/main-component'
import User from "./user/user-component"

console.log(store.getState())
const app = document.getElementById('app')

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, app)
// render(<App />, navbar);
