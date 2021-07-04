import { SET_LOGIN_SUCCESS } from './actionTypes';
import { history } from '../history';
import apiServices from '../services/api-services';
import * as loaderActions from './loadr-action';


export function signUpSuccess(isSuccess, email, password) {
  let userData = { 'userName': email, 'password': password }

  console.log("Login Action");
  return {
    type: SET_LOGIN_SUCCESS,
    'isLoginSuccess': isSuccess,
    'loginData': userData
  }
}


export const doSignUp = (email, password) => {

  // TODO: SignUp API Integration
  return (dispatch => {
    dispatch(loaderActions.showLoader());

    apiServices.signUp(email, password)
      .then(result => {
        dispatch(loaderActions.hideLoader());
        console.log(result);
        if (result.status === "Success") {
          dispatch(signUpSuccess(true, email, password));
          history.push('/dashbord');
        }
      })
  });

}

