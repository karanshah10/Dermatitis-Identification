import * as actionTypes from '../actions/actionTypes';

export default function loaderReducer(state = {
  showLoader: false,
}, action) {
  switch (action.type) {
    case actionTypes.SHOW_LOADER:
      return Object.assign({}, state, {
        showLoader: true
      });
    case actionTypes.HIDE_LOADER:
      return Object.assign({}, state, {
        showLoader: false
      });
    default:
      return state;
  }
}
