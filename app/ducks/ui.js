import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const key = 'UI';

export const types = {
  STORE_DATA: `${key}/STORE_DATA`,
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

const selectState = (state) => state[key] || initialState;
export const selectors = {
  selectIsViewingImage: () => createSelector(selectState, (state) => state.isViewingImage),
};

export default reducer;
