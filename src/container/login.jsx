import React, { Component } from 'react';
import LoginTemplate from '../component/login-template/login-template';
import { emailPattern, passwordPattern } from '../utils/util';
import { history } from '../redux/history';
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: "",
      password: ""
    };
    this.onChangeListener = this.onChangeListener.bind(this);
    this.newUserClick = this.newUserClick.bind(this);
  }

  onChangeListener(event) {
    console.log("onChangeListener");
    const name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state.userName);
      console.log(this.state.password);
    });
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
          onChangeListener={this.onChangeListener} />
      </div>
    )
  }
}

export default Login;