import { combineReducers } from 'redux-immutable';

import filter from './filter';
import query from './query';

export default combineReducers({
  query,
  filter,
});