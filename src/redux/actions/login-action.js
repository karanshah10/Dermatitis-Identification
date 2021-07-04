import { SET_LOGIN_SUCCESS } from './actionTypes';
import { history } from '../history';
import apiServices from '../services/api-services';
import * as loaderActions from './loadr-action';
import * as toastComponentAction from './toast-action';
import { ERROR_TIMEOUT } from '../../App-config';


export function loginSuccess(isSuccess, email, password) {
  console.log("Login Action");
  let userData = { 'userName': email, 'password': password }
  return {
    type: SET_LOGIN_SUCCESS,
    'isLoginSuccess': isSuccess,
    'loginData': userData
  }
}

export const doLogin = (email, password) => {

  // TODO: Login API Integration
  return (dispatch => {
    dispatch(loaderActions.showLoader());
    console.log("Login Action");
    apiServices.login(email, password)
      .then(result => {
        dispatch(loaderActions.hideLoader());
        if (result.status === 'Success' && result.data.length > 0) {
          dispatch(toastComponentAction.showSuccessMessage(true, result.data.message));
          setTimeout(() => {
            dispatch(toastComponentAction.showSuccessMessage(false, ''));
          }, ERROR_TIMEOUT);
          dispatch(loginSuccess(true, result.data[0].email, result.data[0].password));
          history.push('/dashbord');
        } else {
          dispatch(toastComponentAction.showErrorMessage(true, 'Invalid Username Or Password'));
          setTimeout(() => {
            dispatch(toastComponentAction.showErrorMessage(false, ''));
          }, ERROR_TIMEOUT);
        }
      })
  });
}

export const logout = () => {
  return (dispatch) => {
    history.push('/login');
    dispatch(loginSuccess(false, {}));
    // TODO : Logout API Integration
  }
}