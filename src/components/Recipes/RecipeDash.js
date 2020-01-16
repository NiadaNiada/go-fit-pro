import React from "react";
import { connect } from "react-redux";
import RecipeContent from './RecipeContent';

class RecipesDash extends React.Component {
  render() {
    if (!this.props.macroChecker.isDone) {
      return (
        <div >
          <div className="content">
            <div className="not-done-modal">
              <div className="modal-content">
                <p>Oh...It seems you haven't calculated your macros. Go to Dashboard to continue.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div >
          <RecipeContent />
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
export default connect(mapStateToProps)(RecipesDash);
