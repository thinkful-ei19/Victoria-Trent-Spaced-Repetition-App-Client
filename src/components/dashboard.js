import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';
import './dashboard.css'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(value) {
      return this.props.dispatch(submittedAnswer(value))
    }

    render() {
        return (
            <div className="dashboard">
                <h2 className="dashboard-username">
                    Hi {this.props.username}
                </h2>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                </div>
                <div className="elementForm">
                <section>feedback: {this.props.feedback ? this.props.feedback.answer : ''}</section>
                <div className="guessElement">
                Guess This Element!
                </div>
                <section>Symbol: {this.props.protectedData ? this.props.protectedData.symbol : ''}</section>
                <section>Number: {this.props.protectedData ? this.props.protectedData.number : ''}</section>
                <form
                  className="answer-form"
                  onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}>
                <Field component='input' type="text" name="answer"/>
                <button>
                  Submit
                </button>
                </form>
                <button onClick={() => this.props.dispatch(fetchProtectedData())}>
                  Next Question
                </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state.protectedData.feedback)
    return {
        userId: state.auth.currentUser._id,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        feedback: state.protectedData.feedback
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Dashboard)));
