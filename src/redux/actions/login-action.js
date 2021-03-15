import { SET_LOGIN_SUCCESS } from './actionTypes';
import { history } from '../history';


export function loginSuccess(isSuccess, loginData) {
  console.log("Login Action");
  return {
    type: SET_LOGIN_SUCCESS,
    'isLoginSuccess': isSuccess,
    'loginData': loginData
  }
}

export const doLogin = (loginData) => {
  return (dispatch) => {
    // TODO: Login API Integration
    history.push('/dashbord');
    dispatch(loginSuccess(true, loginData));
  }
}

export const logout = () => {
  return (dispatch) => {
    history.push('/login');
    dispatch(loginSuccess(false, {}));
    // TODO : Logout API Integration
  }
}