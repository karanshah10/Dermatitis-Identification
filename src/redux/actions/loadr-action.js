
import * as actionTypes from './actionTypes';


let loaderCounter = 0;
export function showLoader() {
  loaderCounter++;
  return {
    type: actionTypes.SHOW_LOADER
  }
}
export function hideLoader() {
  loaderCounter--;
  return {
    type: (loaderCounter > 0) ? actionTypes.SHOW_LOADER : actionTypes.HIDE_LOADER
  }
}
