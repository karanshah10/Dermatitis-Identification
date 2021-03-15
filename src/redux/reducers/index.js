import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import nevigationAndHeaderReducer from './nevigation-header-reducer';

export default combineReducers({
  loginReducer: loginReducer,
  nevigationAndHeaderReducer: nevigationAndHeaderReducer,
});