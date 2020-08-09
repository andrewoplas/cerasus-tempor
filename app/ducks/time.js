import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const key = 'TIME';

export const types = {
  SAVE_TIME: `${key}/SAVE_TIME`,
  DELETE_TIME: `${key}/DELETE_TIME`,
};

export const initialState = {
  savedTimes: [],
};

const reducer = handleActions(
  {
    [types.SAVE_TIME]: (state, { payload }) => ({
      ...state,
      savedTimes: [payload, ...state.savedTimes],
    }),
    [types.DELETE_TIME]: (state, { payload }) => {
      const filteredTimes = state.savedTimes.filter(({ id }) => id !== payload);

      return {
        ...state,
        savedTimes: filteredTimes,
      };
    },
  },
  initialState,
);

export const actions = {
  saveTime: createAction(types.SAVE_TIME),
  deleteTime: createAction(types.DELETE_TIME),
};

const selectState = (state) => state[key] || initialState;
export const selectors = {
  selectTimes: () => createSelector(selectState, (state) => state.savedTimes),
};

export default reducer;
