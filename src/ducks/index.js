import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

import api from './api';

export const StateRecord = new Record({
    api: undefined,
});

export default combineReducers({
    api,
});
