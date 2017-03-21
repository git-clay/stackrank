import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { logout } from '../user/login/authActions';

export default () => {
  return (
     <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Stack-Rank</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/signup'>Sign up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
