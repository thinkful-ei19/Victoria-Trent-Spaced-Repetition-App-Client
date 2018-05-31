import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css'


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing">
          <img className="landingImage" src={require('../images/quimica.jpg')} alt="chemistry"/>
          <button className="getStartedButton">
            <Link to="/register">Get Started</Link>
          </button>

          <div className="descriptionBoxes">
          <section className="descriptionBox">
            <h3 className="descriptionTitle">Spaced Repetition</h3>
            <p>Learn periodic table quickly</p>
            <p>and retain your knowledge forever</p>
            <p>with our super-smart</p>
            <p>repetition algorithm!</p>
          </section>
          <section className="descriptionBox">
            <h3 className="descriptionTitle">Track Progress</h3>
            <p>Track the progress as you</p>
            <p>go! The higher your</p>
            <p>accuracy, the better you</p>
            <p>know your stuff.</p>
          </section>
          <section className="descriptionBox">
            <h3 className="descriptionTitle">Costumize</h3>
            <p>Elements is customizable!</p>
            <p>Pick and choose your</p>
            <p>settings to maximize</p>
            <p>your learning</p>
          </section>
          </div>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
