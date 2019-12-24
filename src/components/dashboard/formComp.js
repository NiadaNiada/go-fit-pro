import React from "react";
import { Field, reduxForm } from "redux-form";

class FormComp extends React.Component {
  render() {
    const required = value => value ? undefined : 'Required'
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
                  validate={[required]}
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
                  validate={[required]}

                />
              </div>
            </div>
            <div>
              <label>Height in Cm</label>
              <div>
                <Field name="height"
                  component="input"
                  className="height"
                  placeholder="Height"
                  type="number"
                  validate={[required]}>

                </Field>
              </div>
            </div>
            <div>
              <label>Activity Level</label>
              <div>
                <Field name="activity" component="select" className="height" placeholder="Activity" validate={[required]}>
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
                    validate={[required]}
                  />
                  Male
            </label>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                    validate={[required]}
                  />
                  Female
            </label>
              </div>
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
          </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
          </button>
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
