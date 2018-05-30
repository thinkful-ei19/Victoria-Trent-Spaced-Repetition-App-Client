import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Element from './element';
import './dashboard.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <Element />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.protectedData.feedback)
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
