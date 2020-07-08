import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const types = {
  MAIN: 'UI',
  STORE_DATA: 'UI/STORE_DATA',
};

export const initialState = {
  isViewingImage: false,
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
};

const selectState = state => state[types.MAIN] || initialState;
export const selectors = {
  selectIsViewingImage: () => createSelector(selectState, state => state.isViewingImage),
};

export default reducer;
