import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const types = {};

export const initialState = {};

const reducer = handleActions({}, initialState);

export const actions = {};

const selectState = (state) => state[types.MAIN] || initialState;
export const selectors = {};

export default reducer;
