import * as types from './actionTypes';

export const navigate = page => ({
  type: types.NAVIGATE,
  page,
});
