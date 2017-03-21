// Import all the third party stuff
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, BrowserRouter as Router } from 'react-router-dom';

import store from "./main/store"
import routes from "./main/routes";

//components for pages
import App from './main/main-component'
import User from "./user/user-component"

console.log(store.getState())
const app = document.getElementById('app')

render(<Provider store={store}>
	<App />
</Provider>, app);
// render(<App />, navbar);
