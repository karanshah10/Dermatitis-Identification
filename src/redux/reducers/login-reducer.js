import { SET_LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoginSuccess: false,
  loginData: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        loginData: action.loginData
      });

    default:
      return state;
  }
}