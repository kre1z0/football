import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

import test from './test';
import youtube from './youtube';

export const StateRecord = new Record({
    test: undefined,
    youtube: undefined,
});

export default combineReducers({
    test,
    youtube,
});
