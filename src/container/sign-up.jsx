import React, { Component } from 'react';
import SignUpTemplate from '../component/signin-template/signup-template';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userName: "",
    password: "",
    confirmPassword: ""
  }

  onChnageListener = (event) => {
    console.log("onChnageListener");
    const name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value }, () => {
      console.log(this.state)
    });
  }

  render() {
    return (
      <div>
        <SignUpTemplate signUpState={this.state}
          onChnageListener={this.onChnageListener} />
      </div>
    )
  }
}

export default SignUp;