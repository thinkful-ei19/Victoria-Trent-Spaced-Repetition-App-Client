import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { Link, Redirect} from 'react-router-dom';
import {fetchStatsData} from '../actions/protected-data';
import './progress.css'

export class Progress extends React.Component {

  elementIcon(){

    return '🥇';'🥈';'🥉'
  }

  render(){

      let progress = "loading"
    if(this.props.statsList){
     progress = this.props.statsList.map((stat, index) => {
    const {name, symbol, correct, incorrect } = stat

      return(
        <div key={index}>
          <section className="progressBox">
            <div className="littleElement">
              <h1 className="progressElementSymbol">{symbol}</h1>
              <h2 className="progressElementName">{name}</h2>
            </div>
            <p className="correctElement">{correct}</p>
            <p className="incorrectElement">{incorrect}</p>
          </section>

        </div>
      )
    })}

      return (
      <div>
        <h1 className="progress">Progress</h1>
        <div>
        {progress}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
console.log(state.protectedData.stats)
    return {
        username: state.auth.currentUser.username,
        statsList: state.protectedData.stats
    };
};

export default requiresLogin()(connect(mapStateToProps)(Progress));
