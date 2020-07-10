import { combineReducers } from 'redux';
import requestReducer, { REQUEST_KEY } from './request';
import timeReducer, { key as timeKey } from './time';
import uiReducer, { key as uiKey } from './ui';

export default combineReducers({
  [timeKey]: timeReducer,
  [uiKey]: uiReducer,
  [REQUEST_KEY]: requestReducer,
});
