import './login.css';
import wave from '../../images/wave.png';
import avatar from '../../images/avatar_doctor.svg';
import doctors from '../../images/doctors.svg';
import { history } from '../../redux/history';
const LoginTemplate = (props, context) => {
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
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {!props.loginState.userName ? <h5>Username</h5> : null}
                <input type="text" className="input"
                  name="userName"
                  onChange={props.onChangeListener}
                  value={props.loginState.userName}
                />

              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {!props.loginState.password ? <h5>Password</h5> : null}
                <input type="password" className="input"
                  name="password"
                  onChange={props.onChangeListener}
                  value={props.loginState.password}
                />

              </div>
            </div>
            <h3 onClick={props.newUserClick} >New User?</h3>
            <button type="submit" className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTemplate;