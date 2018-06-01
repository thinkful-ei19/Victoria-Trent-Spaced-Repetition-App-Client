import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Element from './element';
import './dashboard.css'

export class Dashboard extends React.Component {
  getPoints(){
    let points
    if(this.props.points < 20 ) {
        points = "points"
    } else if(this.props.points > 30 && this.props.points < 60) {
        points = "points1"
    } else if(this.props.points > 60 && this.props.points < 90){
        points = "points2"
    } else if(this.props.points > 90 && this.props.points < 120){
        points = "points3"
    } else {
        points = "points4"
    }
    return points
  }

  tally(){
    let char = ""
    for(let i = 0; i < this.props.tally; i++){
      if(i % 5 === 0){
         char = "卌"
      } else {char += "|"
      }
    }
    return char
  }

    render() {
      let count = this.tally(this.props.tally)
      return (
            <div className="dashboard">
              <div className="scoreBoard">
                <div className="score">Score</div>
                <div className={this.getPoints()}>
                  {this.props.points ? this.props.points : '0'}</div>
                </div>
              <div className="tally">
                {count}
              </div>
              <Element />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        points: state.protectedData.points,
        tally: state.protectedData.tally
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
