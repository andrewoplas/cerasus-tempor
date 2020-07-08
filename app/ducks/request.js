import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { request } from '../globals/variables';

export const REQUEST_KEY = 'request';

export const types = {
  REQUEST: 'REQUEST',
  SUCCESS: 'REQUEST/SUCCESS',
  ERROR: 'REQUEST/ERROR',
  RESET: 'REQUEST/RESET',
  RESET_MANY: 'REQUEST/RESET_MANY',
};

export const initialState = {
  requestStatus: {},
  errors: {},
};

const reducer = handleActions(
  {
    [types.REQUEST]: (state, { payload: { key } }) => {
      const { requestStatus, errors } = state;
      requestStatus[key] = request.REQUESTING;
      errors[key] = [];

      return {
        ...state,
        errors,
        requestStatus,
      };
    },

    [types.SUCCESS]: (state, { payload: { key } }) => {
      const { requestStatus } = state;
      requestStatus[key] = request.SUCCESS;

      return {
        ...state,
        requestStatus,
      };
    },

    [types.ERROR]: (state, { payload: { key, error } }) => {
      const { requestStatus, errors } = state;
      requestStatus[key] = request.ERROR;
      errors[key] = error;

      return {
        ...state,
        errors,
        requestStatus,
      };
    },

    [types.RESET]: (state, { payload: key }) => {
      const { requestStatus, errors } = state;
      requestStatus[key] = request.NONE;
      errors[key] = [];

      return {
        ...state,
        errors,
        requestStatus,
      };
    },

    [types.RESET_MANY]: (state, { payload: keys }) => {
      const { requestStatus, errors } = state;

      keys.forEach(key => {
        requestStatus[key] = request.NONE;
        errors[key] = [];
      });

      return {
        ...state,
        errors,
        requestStatus,
      };
    },
  },
  initialState,
);

export const actions = {
  request: createAction(types.REQUEST),
  success: createAction(types.SUCCESS),
  error: createAction(types.ERROR),
  reset: createAction(types.RESET),
  resetMany: createAction(types.RESET_MANY),
};

const selectRequest = state => state[REQUEST_KEY] || initialState;
export const selectors = {
  selectError: key => createSelector(selectRequest, state => state.errors[key] || []),
  selectRequestStatus: key =>
    createSelector(selectRequest, state => state.requestStatus[key] || request.NONE),

  selectManyErrors: keys =>
    createSelector(selectRequest, state => {
      const errors = {};
      keys.forEach(key => {
        errors[key] = key in state.errors ? state.errors[key] : [];
      });

      return errors;
    }),

  selectManyRequestStatus: keys =>
    createSelector(selectRequest, state => {
      const status = {};
      keys.forEach(key => {
        status[key] = key in state.requestStatus ? state.requestStatus[key] : request.NONE;
      });

      return status;
    }),
};

export default reducer;
