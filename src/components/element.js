import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';
import './element.css'
import styled from 'styled-components';

const elementTable = styled.div`
  background: ${props => this.props.feedback ? (this.props.feedback.isCorrect ? 'geen' : 'red') : 'white'}
`

export class Element extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(value) {
      return this.props.dispatch(submittedAnswer(value))
    }

    randomPositiveFeedback(){
      const feedback=[
        'You got it',
        'Nice job!',
        'You got it!',
        'Victorious!',
        'Superb!',
        'Impressive!',
        'Amazing!',
        'Fab!',
        'You on fire!',
        'Well done!']
      return this.chooseRandom(feedback)
    }

    randomNegativeFeedback(){
      const feedback=[
        'Well...Keep practising',
        'Oh boy...',
        'Really...?',
        'Not this time',
        'Try again',
        'Nope',
        'You did not do your homework, did ya?']
      return this.chooseRandom(feedback)
    }

    chooseRandom(arr){
      const randomIndex = Math.floor(Math.random() * arr.length)
      console.log(randomIndex, "random")
      return arr[randomIndex]
    }

    render() {
        return (
          <div className="elementForm">
            <h2 className="guessElement">
            {this.props.feedback ?
            (this.props.feedback.isCorrect ? this.randomPositiveFeedback() : this.randomNegativeFeedback()) : 'What is the name of this element?'}
            </h2>
              <div className={this.props.feedback ? (this.props.feedback.isCorrect ? 'greenTable' : 'redTable') : 'elementTable'}>
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
    return {
        protectedData: state.protectedData.data,
        username: state.auth.currentUser.username,
        feedback: state.protectedData.feedback
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Element)));
