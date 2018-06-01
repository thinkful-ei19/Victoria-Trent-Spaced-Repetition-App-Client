import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {updateStack, fetchStatsData} from '../actions/protected-data';
import './progress.css'

export class Progress extends React.Component {

  groupArrays(coll, length) {
    if (coll.length <= length) return [coll];
    let list = [];
    for (let i = 0; i < coll.length; i+=length) {
      list.push(coll.slice(i, i+length))
    }
    return list
  }

  componentDidMount() {
    this.props.dispatch(fetchStatsData());
  }

  render(){
    let progress = "loading"
    if (this.props.statsList) {
      progress = this.props.statsList.map((stat, index) => {
        const {name, symbol, correct, incorrect } = stat
        return(
          <div key={index}>
            <section className="progressBox">
              <div className="littleElement">
                <h1 className="progressElementSymbol">{symbol}</h1>
                <h2 className="progressElementName">{name}</h2>
                <p className="correctElement">Correct answers {correct}</p>
                <p className="incorrectElement">Incorrect answers {incorrect}</p>
              </div>
            </section>
          </div>
        )
      })
      const groupedList = this.groupArrays(progress, 5);
      progress = groupedList.map((list, i) => {
        return (
          <ul key={i}>
            {
              list.map((el, i) => (<li key={i}>{el}</li>) )
            }
          </ul>
        )
      })
    }

      return (
      <div>
        <h1 className="progressHeader">Current Progress</h1>
        <div className="Progress" >
        {progress}
        <button className="addCards" onClick={() => {
            return this.props.dispatch(updateStack())
            .then(() => this.props.dispatch(fetchStatsData()))
        }}>
          +
        </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        statsList: state.protectedData.stats
    };
};

export default requiresLogin()(connect(mapStateToProps)(Progress));
