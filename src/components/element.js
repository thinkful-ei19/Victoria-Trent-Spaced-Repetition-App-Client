import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';
import './element.css'

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
            <h2 className="guessElement">
            {this.props.feedback ?
            (this.props.feedback.isCorrect ? `You got it!` : `Well..Keep practising`) : 'What is the name of this element?'}
            </h2>
              <div className="elementTable">
                <div className="number">{this.props.protectedData ? this.props.protectedData.number : ''}</div>
                <div className="symbol">{this.props.protectedData ? this.props.protectedData.symbol : ''}</div>
                <div className="name">
                {this.props.feedback ?  this.props.feedback.answer :
                <form
                  className="answer-form"
                  onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}>
                <Field component='input' type="text" name="answer"/>
                </form>}
                </div>
                </div>
                {this.props.feedback ?
                <button onClick={() => this.props.dispatch(fetchProtectedData())}>
                  Next Question
                </button> : ""}
          </div>
        );
    }
}

const mapStateToProps = state => {
  console.log(state.protectedData.feedback)
    return {
        protectedData: state.protectedData.data,
        username: state.auth.currentUser.username,
        feedback: state.protectedData.feedback
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Element)));
