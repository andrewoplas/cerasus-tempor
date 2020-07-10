import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const key = 'TIME';

export const types = {
  SAVE_NOW: `${key}/SAVE_NOW`,
  SAVE_LATER: `${key}/SAVE_LATER`,
};

export const initialState = {
  savedNowTimes: [],
  savedLaterTimes: [],
};

const reducer = handleActions(
  {
    [types.SAVE_NOW]: (state, { payload }) => ({
      savedNowTimes: [payload, ...state.times],
    }),
    [types.SAVE_LATER]: (state, { payload }) => ({
      savedLaterTimes: [payload, ...state.times],
    }),
  },
  initialState,
);

export const actions = {
  saveNow: createAction(types.SAVE_TIME),
  saveLater: createAction(types.SAVE_TIME),
};

const selectState = (state) => state[key] || initialState;
export const selectors = {
  selectSavedNowTimes: () => createSelector(selectState, (state) => state.savedNowTimes),
  selectSavedLaterTimes: () => createSelector(selectState, (state) => state.savedLaterTimes),
  selectTimes: () =>
    createSelector(selectState, (state) => [...state.savedNowTimes, ...state.savedLaterTimes]),
};

export default reducer;
