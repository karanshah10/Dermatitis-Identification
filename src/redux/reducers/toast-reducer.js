import * as actionTypes from '../actions/actionTypes';

export default function toastComponentReducer(state = {
  isSuccessMessage: false,
  isErrorMessage: false,
  message: ''
}, action) {
  switch (action.type) {
    case actionTypes.SHOW_SUCCESS_MESSAGE:
      return Object.assign({}, state, {
        isSuccessMessage: action.isSuccessMessage,
        isErrorMessage: action.isErrorMessage,
        message: action.message
      });
    case actionTypes.SHOW_ERROR_MESSAGE:
      return Object.assign({}, state, {
        isErrorMessage: action.isErrorMessage,
        isSuccessMessage: action.isSuccessMessage,
        isDefaultErrorMessage: action.isDefaultErrorMessage,
        message: action.message
      });
    case actionTypes.SHOW_DEFAULT_ERROR_MESSAGE:
      return Object.assign({}, state, {
        isDefaultErrorMessage: action.isDefaultErrorMessage,
        isSuccessMessage: action.isSuccessMessage
      });
    default:
      return state;
  }
}