import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import systemsReducer from './systemsReducer';

export default combineReducers({
  navigation: navigationReducer,
  systems: systemsReducer,
});
