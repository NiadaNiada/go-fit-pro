import React from "react";
import DashInfo from "./DashInfo";
import { createMacros } from "../../actions";
import { connect } from "react-redux";
import FormComp from './formComp';

class MainNav extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit = values => {
    // print the form values to the console
    this.props.createMacros(values);
  };

  render() {
    if (!this.props.macroChecker.isDone) {
      return (
        <div >
          <div className="user"></div>

          <FormComp onSubmit={this.submit} />
        </div>
      );
    } else {
      return (
        <div >

          <div className="user"></div>

          <div className="content">
            <DashInfo />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    macroChecker: state.macroChecker
  };
};

export default connect(
  mapStateToProps,
  {
    createMacros
  }
)(MainNav);
