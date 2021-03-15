import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReduer from '../reducers/index';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReduer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;