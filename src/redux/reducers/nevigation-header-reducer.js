import { SET_MODEL } from '../actions/actionTypes';

export default function (state = {
  isModelSelected: false
}, action) {
  switch (action.type) {

    case SET_MODEL:
      return Object.assign({}, state, {
        isModelSelected: action.isModelSelected
      });

    default:
      return state;
  }
}