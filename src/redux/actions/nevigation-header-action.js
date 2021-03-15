import { SET_MODEL } from './actionTypes';

export function setModel(modelName, isModelSelected) {
  return {
    type: SET_MODEL,
    modelName: modelName,
    isModelSelected: isModelSelected
  }
}