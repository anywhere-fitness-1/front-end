import React, { Component } from "react";

export class Login extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5">Instructor Login:</h1>
        <div className="form-group">
          <label htmlFor="name">ID#: </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={inputChange("name")}
            value={values.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={inputChange("password")}
            value={values.password}
          />
        </div>
        <br />

        <div className="text-right">
          <button className="btn btn-primary" onClick={this.continue}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
