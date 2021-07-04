  import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import nevigationAndHeaderReducer from './nevigation-header-reducer';
import loaderReducer from './loader-reducer';
import toastReducer from './toast-reducer';

export default combineReducers({
  loginReducer: loginReducer,
  nevigationAndHeaderReducer: nevigationAndHeaderReducer,
  loader: loaderReducer,
  toastComponent: toastReducer
});