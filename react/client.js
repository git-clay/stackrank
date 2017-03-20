import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import User from "./user/user-component"
import store from "./user/user-store"

const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);
ReactDOM.render(<User />, app);
