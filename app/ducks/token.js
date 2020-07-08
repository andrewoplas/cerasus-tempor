import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const types = {
  MAIN: 'TOKEN',
  STORE_DATA: 'TOKEN/STORE_DATA',
  GET_TOKEN: 'TOKEN/GET_TOKEN',
};

export const initialState = {
  token: null,
};

const reducer = handleActions(
  {
    [types.STORE_DATA]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export const actions = {
  storeData: createAction(types.STORE_DATA),
  getToken: createAction(types.GET_TOKEN),
};

const selectState = state => state[types.MAIN] || initialState;
export const selectors = {
  selectToken: () => createSelector(selectState, state => state.token),
};

export default reducer;
