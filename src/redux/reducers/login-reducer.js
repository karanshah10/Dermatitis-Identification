import { SET_LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoginSuccess: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    default:
      return state;
  }
}