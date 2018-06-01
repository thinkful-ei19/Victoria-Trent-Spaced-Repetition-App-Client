import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import requiresLogin from './requires-login';
import {fetchProtectedData, submittedAnswer} from '../actions/protected-data';
import {updateStack} from '../actions/protected-data';
import './element.css'
import Input from './input.js'

export class Element extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(value) {
       this.props.dispatch(submittedAnswer(value))
    }

    randomPositiveFeedback(){
      const feedback=[
        'Rockin-it!',
        'Nice!',
        'Victorious!',
        'Superb!',
        'Impressive!',
        'Amazing!',
        'Fab!',
        'On fire!',
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
        'You did not do your homework, did you?']
      return this.chooseRandomNegative(feedback)
    }

    chooseRandomNegative(arr){
      const randomIndex = Math.floor(Math.random() * arr.length)
      return arr[randomIndex]
    }

    chooseRandom(arr){
      const randomIndex = Math.floor(Math.random() * arr.length)
      return `You got it right ${this.props.tally} times! ${arr[randomIndex]}`
    }

    nextClick(){
      console.log(this.props.isCardAdded, "ELEMENT")
      if(this.props.isCardAdded) {
        return this.props.dispatch(updateStack())
              .then(() => this.props.dispatch(fetchProtectedData()))
      } else {
        return this.props.dispatch(fetchProtectedData())
      }
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
                  <Field value={this.props.value} component={Input} type="text" name="answer"/>
                  </form>}
                </div>
                <div className="atomicWeight">{this.props.protectedData ? this.props.protectedData.atomicWeight : ''}</div>
              </div>
                {this.props.feedback ?
                <button className="next"
                onClick={() => this.nextClick()}>
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
        feedback: state.protectedData.feedback,
        tally: state.protectedData.tally,
        isCardAdded: state.protectedData.isCardAdded
    };
};

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
  })(Element)));
