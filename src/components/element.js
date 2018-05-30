import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';

export class Element extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(value) {
      return this.props.dispatch(submittedAnswer(value))
    }

    render() {
        return (
          <div className="elementForm">
              <div className="elementTable">
                <h2 className="guessElement">Guess This Element!</h2>
                <section>{this.props.feedback ?
                  (this.props.feedback.isCorrect ? `You got it! ${this.props.feedback.answer}` : `Correct answer is ${this.props.feedback.answer}`) : ''}</section>
                <div className="symbol">{this.props.protectedData ? this.props.protectedData.symbol : ''}</div>
                <div className="number">{this.props.protectedData ? this.props.protectedData.number : ''}</div>
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
    return {
        protectedData: state.protectedData.data,
        username: state.auth.currentUser.username,
        feedback: state.protectedData.feedback
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Element)));
