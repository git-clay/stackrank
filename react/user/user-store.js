// stores state from reducer(s) and and sends to view

import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"
import axios from "axios"; // async RESTful stuff

import reducer from "./user-reducer"



// const error = (store) => (next) => (action) => {
// 	try {
// 		next(action);
// 	} catch(e) {
// 		console.log("ERROR!!", e)
// 	}
// }


const middleware = applyMiddleware(logger())

// store.subscribe(() => {
// 	console.log("store changed", store.getState())
// })

export default createStore(reducer,middleware)