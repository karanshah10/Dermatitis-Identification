import React from 'react';
import './signin.css';
import wave from '../../images/wave.png';
import avatar from '../../images/avatar_doctor.svg';
import doctors from '../../images/doctors.svg';
import { history } from '../../redux/history';
const SignUpTemplate = (props, context) => {
  return (
    <div>
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <img src={doctors} />
        </div>
        <div className="login-content">
          <div className="form" >
            <img src={avatar} />
            <h2 className="title">New User</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {!props.signUpState.userName ? <h5>Username</h5> : null}
                <input type="text" className="input"
                  name="userName"
                  value={props.signUpState.userName}
                  onChange={props.onChnageListener} />
              </div>
            </div>
            <div className="errorMessage">{props.signUpState.formErrors.userName}</div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {!props.signUpState.password ? <h5>Password</h5> : null}
                <input type="password" className="input"
                  name="password"
                  value={props.signUpState.password}
                  onChange={props.onChnageListener} />
              </div>
            </div>
            <div className="errorMessage">{props.signUpState.formErrors.password}</div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {!props.signUpState.confirmPassword ? <h5>Confirm Password</h5> : null}
                <input type="password" className="input"
                  name="confirmPassword"
                  value={props.signUpState.confirmPassword}
                  onChange={props.onChnageListener} />
              </div>
            </div>
            <div className="errorMessage">{props.signUpState.formErrors.confirmPassword}</div>
            <h3 onClick={() => { history.push("/login") }} >Already have an account?</h3>
            <button type="submit" className="btn" onClick={props.onSignUpClick}>Sign UP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpTemplate;