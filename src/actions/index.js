import * as types from './actionTypes';

export const navigate = page => ({
  type: types.NAVIGATE,
  page,
});

export const updateSystems = systems => ({
  type: types.UPDATE_SYSTEMS,
  systems,
});

export const fetchSystems = () => {
  // console.log('FETCH SYSTEMS');
  return (dispatch) => {
    // console.log('FETCH SYSTEMS INNER');
    return fetch('/api/systems')
      .then(res => res.json())
      .then(json => dispatch(updateSystems(json)))
      .catch(err => console.error('<< ERROR >> Error fetching systems:', err));
  };
};
