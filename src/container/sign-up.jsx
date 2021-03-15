import React, { Component } from 'react';
import SignUpTemplate from '../component/signin-template/signup-template';
import { EMAIL_PATTERN } from '../utils/util';
import { connect } from 'react-redux';
import * as signUpActions from '../redux/actions/sign-up-action';
import { bindActionCreators } from 'redux';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    userName: "",
    password: "",
    confirmPassword: "",
    formErrors: {
      userName: "",
      password: "",
      confirmPassword: ""
    },
    isFormSubmitted: false
  }

  onChnageListener = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    value = value.replace(/\s/g, "");
    this.setState({ [name]: value }, () => {
      if (this.state.isFormSubmitted) {
        this.validateField(name, value);
      }
    });
  }

  onSignUpClick = () => {
    this.setState({ isFormSubmitted: true });
    if (!this.isAllFieldValid()) {
      return;
    }

    let signUpData = { 'userName': this.state.userName, 'password': this.state.password }
    this.props.signUpAction.doSignUp(true, signUpData);
  }

  isAllFieldValid = () => {
    let formErrors = this.state.formErrors;
    let isAllValid = true;
    for (let fieldName in formErrors) {
      this.validateField(fieldName, this.state[fieldName]);
      if (formErrors[fieldName].length > 0) {
        isAllValid = false;
      }
    }
    return isAllValid;
  }

  validateField = (name, value) => {
    let formErrors = this.state.formErrors;
    switch (name) {
      case 'userName':
        if (value.trim() === '') {
          formErrors.userName = 'Enter Username';
        } else if (!value.match(EMAIL_PATTERN)) {
          formErrors.userName = 'Enter Valid UserName';
        } else {
          formErrors.userName = '';
        }
        break;
      case 'password':
        if (value.trim() === '') {
          formErrors.password = 'Enter Password';
        } else if (value.length < 8) {
          formErrors.password = 'Maximum length of password Should be 8';
        } else {
          formErrors.password = '';
        }
        break;
      case 'confirmPassword':
        if (value.trim() === '') {
          formErrors.confirmPassword = 'Enter Password';
        } else if (this.state.password != value) {
          formErrors.confirmPassword = 'Password did not match';
        } else {
          formErrors.confirmPassword = '';
        }
        break;
    }
    this.setState({ formErrors });
  }

  render() {
    return (
      <div>
        <SignUpTemplate signUpState={this.state}
          onChnageListener={this.onChnageListener}
          onSignUpClick={this.onSignUpClick} />
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAction: bindActionCreators(signUpActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);