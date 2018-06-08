import * as types from '../actions/actionTypes';

const initialState = {
  page: 'rooms',
};

const navigate = (state = initialState, action) => {
  switch (action.type) {
    case types.NAVIGATE:
      return { page: action.page };
    default:
      return state;
  }
};

export default navigate;
