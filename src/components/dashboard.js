import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(value) {
      const answer = {
        userId: this.props.userId,
        question: this.props.protectedData.symbol,
        ans: value.toLowerCase()
      }
      return this.props.dispatch(submittedAnswer(answer))
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                </div>
                Guess This Element!
                <section>Symbol: {this.props.protectedData ? this.props.protectedData.symbol : ''}</section>
                <section>Number: {this.props.protectedData ? this.props.protectedData.number : ''}</section>

                <form
                  className="answer-form"
                  onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}>
                <Field component='input' type="text" name="answer"/>
                <button disabled={this.props.pristine || this.props.submitting}>
                  Submit!
                </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        userId: state.auth.currentUser._id,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Dashboard)));
