import { SET_LOGIN_SUCCESS } from './actionTypes';

export function loginSuccess(isSuccess) {
  console.log("Login Action");
  return {
    type: SET_LOGIN_SUCCESS,
    'isLoginSuccess': isSuccess
  }
}
