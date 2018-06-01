import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    if(props.loading){
      return (
          <div className="home">
              <div className="loading">
                <LoginForm />
              <div className="loadingText">Loading</div>
              </div>
          </div>
        );
    } else {
      return (
          <div className="home">
              <LoginForm />
              <Link to="/register">Register</Link>
          </div>
      );
   }
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
