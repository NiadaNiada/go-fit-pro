import React from "react";
import { Field, reduxForm } from "redux-form";

class FormComp extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="form">


        <form
          onSubmit={handleSubmit}
          className="pure-form pure-form-stacked my-form"
        >
          <div className="inputs">

            <div>
              <label>Weight in Kg</label>
              <div>
                <Field
                  name="weight"
                  component="input"
                  type="number"
                  placeholder="Weight"
                />
              </div>
            </div>

            <div>
              <label>Age</label>
              <div>
                <Field
                  name="age"
                  component="input"
                  type="number"
                  placeholder="Age"

                />
              </div>
            </div>
            <div>
              <label>Height in Cm</label>
              <div>
                <Field name="height" component="input" className="height" placeholder="Height" type="number">

                </Field>
              </div>
            </div>
            <div>
              <label>Activity Level</label>
              <div>
                <Field name="activity" component="select" className="height" placeholder="Activity">
                  <option />
                  <option value="Sedentary">Sedentary</option>
                  <option value="Light">Lightly Active</option>
                  <option value="Moderate">Moderately Active</option>
                  <option value="Very">Very Active</option>
                  <option value="Extreme">Extremely Active</option>
                </Field>
              </div>
            </div>
            <div>
              <label>Gender</label>
              <div className="gender">
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />
                  Male
            </label>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />
                  Female
            </label>
              </div>
            </div>
            <div className="buttons">
              <div class="ui buttons">
                <button class="ui positive button">Submit</button>
                <div class="or"></div>
                <button class="ui button">Clear</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

FormComp = reduxForm({
  // a unique name for the form
  form: "contact"
})(FormComp);

export default FormComp;
