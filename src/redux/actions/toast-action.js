import * as actionTypes from './actionTypes';
import { DEFAULT_ERROR_MESSAGE } from '../../App-config';

export function showSuccessMessage(value, message) {
  return {
    type: actionTypes.SHOW_SUCCESS_MESSAGE,
    'isSuccessMessage': value,
    'message': message,
    'isErrorMessage': false
  }
}

export function showErrorMessage(value, message) {
  if (message == DEFAULT_ERROR_MESSAGE){
    return showDefaultErrorMessage(value);
  } else {
    return showCustomErrorMessage(value, message);
  }
}

export function showCustomErrorMessage(value, message) {
  return {
    type: actionTypes.SHOW_ERROR_MESSAGE,
    'isErrorMessage': value,
    'message': message,
    'isSuccessMessage': false,
    'isDefaultErrorMessage': false
  }
}

// showDefaultErrorMessage has been created as context.t("default_message") won't work
// when passed from componendDidMount in case of showErrorMessage.
export function showDefaultErrorMessage(value) {
  return {
    type: actionTypes.SHOW_DEFAULT_ERROR_MESSAGE,
    'isDefaultErrorMessage': value,
    'isSuccessMessage': false
  }
}

