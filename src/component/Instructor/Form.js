import React, { Component } from "react";
import Login from "./Login";
import Success from "./Success";

export class Form extends Component {
  state = {
    step: 1,
    user: "",
    password: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // prevStep = () => {
  //   const { step } = this.state;
  //   this.setState({ step: step - 1 });
  // };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { user, password } = this.state;
    const values = { user, password };

    switch (step) {
      case 1:
        return (
          <Login
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return <Success />;
    }
  }
}

export default Form;
