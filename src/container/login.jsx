import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../redux/actions/login-action';
import { bindActionCreators } from 'redux';
import LoginTemplate from '../component/login-template/login-template';
import { history } from '../redux/history';
import { EMAIL_PATTERN } from '../utils/util';
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: "",
      password: "",
      formErrors: {
        userName: '',
        password: ''
      },
      isFormSubmitted: false
    };
    this.onChangeListener = this.onChangeListener.bind(this);
    this.newUserClick = this.newUserClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onChangeListener(event) {
    const name = event.target.name;
    let value = event.target.value;
    value = value.replace(/\s/g, "");
    this.setState({ [name]: value }, () => {
      if (this.state.isFormSubmitted) {
        this.validateField(name, value);
      }
    });
  }

  onLoginClick() {
    this.setState({ isFormSubmitted: true });
    if (!this.isAllFieldValid()) {
      return;
    }
    this.props.loginAction.doLogin(this.state.userName, this.state.password);
  }

  isAllFieldValid() {
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

  validateField(name, value) {
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
    }
    this.setState({ formErrors });
  }

  newUserClick() {
    history.push("/signUp");
  }

  render() {
    return (
      <div>
        <LoginTemplate
          loginState={this.state}
          newUserClick={this.newUserClick}
          onChangeListener={this.onChangeListener}
          onLoginClick={this.onLoginClick} />
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
    loginAction: bindActionCreators(loginActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);