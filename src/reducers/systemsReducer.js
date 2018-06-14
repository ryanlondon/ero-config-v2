import * as types from '../actions/actionTypes';

const initialState = [];

const systemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SYSTEMS:
      return [...action.systems];
    default:
      return state;
  }
};

export default systemsReducer;
