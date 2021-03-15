import { SET_LOGIN_SUCCESS } from './actionTypes';
import { history } from '../history';

export function signUpSuccess(isSuccess, signUpData) {
  console.log("Login Action");
  return {
    type: SET_LOGIN_SUCCESS,
    'isLoginSuccess': isSuccess,
    'loginData': signUpData
  }
}


export const doSignUp = (signUpData) => {
  return (dispatch) => {
    // TODO: APi Integration
    history.push('/dashbord');
    dispatch(signUpSuccess(true, signUpData));
  }
}