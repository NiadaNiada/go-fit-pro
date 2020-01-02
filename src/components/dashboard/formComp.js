import React from "react";
import { Field, reduxForm } from "redux-form";

class FormComp extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

  }
  renderInput = ({ input, label, meta }) => {

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid, error } = this.props;
    return (
      <div className="form">
        <div className="ui raised very padded text container segment container-box">
          <h2 className="ui header">Fill in the form</h2>

          <form
            onSubmit={handleSubmit}
            className="ui form info-form error"
          >

            <div>

              <div className="required field">
                <label>Weight in Kg</label>
                <Field
                  component={this.renderInput}
                  name="weight"
                  type="number"
                  placeholder="Enter weight.."
                />
              </div>

              <div className="required field">
                <label>Age</label>
                <Field
                  component={this.renderInput}
                  name="age"
                  type="number"
                  placeholder="Enter age.."
                  className="required field"

                />
              </div>
              <div className="required field">
                <label>Height in Cm</label>
                <Field
                  component={this.renderInput}
                  name="height"
                  placeholder="Enter height.."
                  type="number"
                  className="required field"

                />
              </div>
              <div className="required field">
                <label>Activity Level</label>
                <Field
                  component={this.renderInput}
                  name="activity"
                  component="select"
                  placeholder="Select activity.."
                  className="required field">
                  <option />
                  <option value="Sedentary">Sedentary</option>
                  <option value="Light">Lightly Active</option>
                  <option value="Moderate">Moderately Active</option>
                  <option value="Very">Very Active</option>
                  <option value="Extreme">Extremely Active</option>
                </Field>

              </div>

              <div className="required field">

                <label for="gender">Select Gender</label>
                <div className="inline fields">
                  <div className="field">
                    <Field
                      className="ui radio checkbox"
                      name="gender"
                      component="input"
                      type="radio"
                      value="male"
                    />
                    <label> Male</label>
                  </div>
                  <div className="field">
                    <Field
                      component={this.renderInput}
                      className="ui radio checkbox"
                      name="gender"
                      component="input"
                      type="radio"
                      value="female"
                    />
                    <label> Female</label>
                  </div>
                </div>
              </div>
              <div >
                <button className="buttons submit huge left floated ui button"
                  type="submit" disabled={invalid || submitting}>Submit</button>
                <button className="buttons negative huge right floated ui button"
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
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.weight) {
    errors.weight = 'You must enter your weight!';
  } else if ((formValues.weight.length < 2) || (formValues.weight.length > 3)) {
    errors.weight = 'Invalid format, it should be minimum 2 and up to 4 characters';
  } else if (isNaN(formValues.weight)) {
    errors.weight = 'Invalid format, use numbers';
  }
  if (!formValues.age) {
    errors.age = 'You must enter your age!';
  } else if (isNaN(formValues.age)) {
    errors.age = 'Invalid format, use numbers';
  } else if (Number(formValues.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  if (!formValues.height) {
    errors.height = 'You must enter your height!';
  } else if ((formValues.height.length < 3) || (formValues.height.length > 4)) {
    errors.height = 'Minimum be 3 characters or more';
  } else if (isNaN(formValues.height)) {
    errors.height = 'Invalid format, use numbers';
  }
  if (!formValues.activity) {
    errors.activity = 'You must select your activity!';
  }
  if (!formValues.gender) {
    errors.gender = 'You must select your gender!';
  }
  return errors;
}

FormComp = reduxForm({
  form: "contact",
  validate
})(FormComp);

export default FormComp;
