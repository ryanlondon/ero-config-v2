import * as types from '../actions/actionTypes';

const initialState = {
  currentPage: 'rooms',
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NAVIGATE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
};

export default navigationReducer;
