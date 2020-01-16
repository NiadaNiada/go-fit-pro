import React from "react";
import Chart from "./Chart";
import { connect } from "react-redux";
import { customMacros } from '../../actions/index'

class DashInfo extends React.Component {
  constructor() {
    super();
    this.clickIt = this.clickIt.bind(this);
  }
  clickIt(value) {
    this.props.customMacros(this.props.macroChecker, value.target.id);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  render() {

    if (!this.props.fitnessGoals.customMacDone) {
      return (
        <div className="goals-contain">
          <div className="goals-content">
            <div className="select-goal">
              <h4>We would like to know your fitness goals.</h4>
              <div className="fitness-goals" >
                <div className="fit-img fit-lose" />
                <div className="fit-title">
                  <h3>Lose Weight</h3>
                  <button className="ui inverted basic button select-button" id="lose" onClick={this.clickIt}>Click Here</button>
                </div>
              </div>
              <div className="fitness-goals">
                <div className="fit-img fit-maintain" />
                <div className="fit-title">
                  <h3>Maintain Weight</h3>
                  <button className="ui inverted basic button select-button" id="maintain" onClick={this.clickIt}>Click Here</button>
                </div>
              </div>
              <div className="fitness-goals">
                <div className="fit-img fit-gain" />
                <div className="fit-title">
                  <h3>Gain Weight</h3>
                  <button className="ui inverted basic button select-button" id="gain" onClick={this.clickIt}>Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="subcontain">
          <h4>Current Plan: </h4>
          <div className="info">
            <div className="left">
              <h4>Calories: {this.props.fitnessGoals.calories}kcal</h4>
              <h4>Protein: {this.props.fitnessGoals.protein}g</h4>
              <h4>Fats: {this.props.fitnessGoals.fat}g</h4>
              <h4>Carbohydrates: {this.props.fitnessGoals.carbs}g</h4>
            </div>
            <div className="right-chart">
              <Chart />
            </div>
          </div>
          <div className="bottom">
            <h4>
              Congrats, you've successfully calculated your daily needs. So what
              now? Click on the recipes link to access hundreds
              of recipes and also pick a daily workout.
            </h4>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    fitnessGoals: state.fitnessGoals,
    macroChecker: state.macroChecker
  };
};
export default connect(mapStateToProps, {
  customMacros
})(DashInfo);
