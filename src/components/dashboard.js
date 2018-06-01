import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Element from './element';
import './dashboard.css';

export class Dashboard extends React.Component {
  getPoints(){
    let points
    if(this.props.points < 50 ) {
        points = "points"
    } else if(this.props.points > 50 && this.props.points < 100) {
        points = "points1"
    } else if(this.props.points > 100 && this.props.points < 150){
        points = "points2"
    } else if(this.props.points > 150 && this.props.points < 200){
        points = "points3"
    } else {
        points = "points4"
    }
    return points
  }

  render() {
    return (
          <div className="dashboard">
            <div className={this.props.isCardAdded ? "scoreBoardBonus" : "scoreBoard" }>
              <div className="score">Score</div>
              <div className={this.getPoints()}>
                {this.props.points ? this.props.points : '0'}
              </div>
              <div className={this.props.isCardAdded ? "bonus" : "noBonus"}>
                <p>Bonus Time!</p>
                <p>Adding new cards!</p>
              </div>
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
        isCardAdded: state.protectedData.isCardAdded
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
