import { combineReducers } from 'redux';
import requestReducer, { REQUEST_KEY } from './request';
import tokenReducer, { types as tokenTypes } from './token';
import uiReducer, { types as uiTypes } from './ui';

export default combineReducers({
  [tokenTypes.MAIN]: tokenReducer,
  [uiTypes.MAIN]: uiReducer,
  [REQUEST_KEY]: requestReducer,
});
