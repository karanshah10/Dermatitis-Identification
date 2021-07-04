import { SET_MODEL } from './actionTypes';

export function setModel(isModelSelected) {
  return {
    type: SET_MODEL,
    isModelSelected: isModelSelected
  }
}