import React from "react";
import RecipeGenerator from './RecipeGenerator';
import { recipeInput, fetchRecipe } from '../../actions';
import { connect } from "react-redux";

class RecipeContent extends React.Component {
  change = (value) => {
    if (value.key === "Enter") {
      this.props.recipeInput(value.target.value)
      this.props.fetchRecipe(value.target.value)
    }
  }
  render() {
    return (
      <div className="recipes-contain">
        <div className="recepies-header">
          <h4>HEALTHY-FOOD RECIPES</h4>
          <form className="ui form search-form">
            <div className="ui inverted left icon input search-bar">
              <input type="text" name="search" placeholder="Search..." onKeyPress={this.change} />
              <i className="search icon search-icon"></i>
            </div>
          </form>
        </div>
        <div className="search-bar-contain">
          <RecipeGenerator />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fitnessGoals: state.fitnessGoals
  };
};

export default connect(mapStateToProps,
  {
    fetchRecipe,
    recipeInput
  })(RecipeContent);
