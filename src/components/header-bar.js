import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { Link, Redirect} from 'react-router-dom';
import {fetchStatsData} from '../actions/protected-data';
import './header-bar.css'
import withRouter from 'react'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        return <Redirect to="/" />;
    }

    colourPick(){
      let className = ""
      return (this.props.loggedIn ? className = "nav-item" : className = "navigation-item")
    }
    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return <nav className="nav-bar">
            <ul className={this.props.loggedIn ? "nav" : "navigation"}>
              <li className="login">
                {this.props.loggedIn ? null : <Link to="/login" className={this.colourPick()}>
                  Log In
                </Link>}
              </li>
              <li>
                 <Link to="/about" className={this.colourPick()}>
                    About
                  </Link>
              </li>
              <li>
                {this.props.loggedIn ? <Link to="/progress" className="nav-item" onClick={() => this.props.dispatch(fetchStatsData())}>
                    Progress
                  </Link> : null}
              </li>
              <li>
                {this.props.loggedIn ? <Link to="/dashboard" className="nav-item">
                    Learn
                  </Link> : null}
              </li>
              <li>
                {this.props.loggedIn ? null : <Link to="/" className={this.colourPick()}>
                    Home
                  </Link>}
              </li>
              <li className="right">
                <button className="logout-button" onClick={() => this.logOut()} style={this.props.loggedIn ? { display: 'inline-block' } : { display: 'none' }}>
                  {' '}
                  Log Out{' '}
                </button>{' '}
              </li>
            </ul>
          </nav>;
      }
    }

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
