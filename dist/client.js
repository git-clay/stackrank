"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require("react-redux");

var _userComponent = require("./user/user-component");

var _userComponent2 = _interopRequireDefault(_userComponent);

var _userStore = require("./user/user-store");

var _userStore2 = _interopRequireDefault(_userStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);
_reactDom2.default.render(_react2.default.createElement(_userComponent2.default, null), app);