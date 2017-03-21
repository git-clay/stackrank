// will pull in all other components and create page layouts
// layouts will be sent to client.js to be rendered
/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import NavBar from '../navbar/nav-component';
import { connect } from 'react-redux';
// import auth from '../utils/auth';

class App extends Component {
  render() {
    return(
      <div className='container'>
      	<NavBar />
      	{this.props.children}
      </div>
    )
  }
}

export default App;

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
// export default connect(select)(App);
