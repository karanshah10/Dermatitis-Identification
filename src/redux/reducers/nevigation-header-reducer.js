import { SET_MODEL } from '../actions/actionTypes';

export default function (state = {
  modelName: 'Please Select Model',
  isModelSelected: false
}, action) {
  switch (action.type) {

    case SET_MODEL:
      return Object.assign({}, state, {
        modelName: action.modelName,
        isModelSelected: action.isModelSelected
      });

    default:
      return state;
  }
}