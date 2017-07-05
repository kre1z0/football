import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

const TwitchState = Record({
    name: 'weber',
    loading: false,
    error: false,
});

const initState = new TwitchState();

export const fetchStart = createAction('twitch/fetch-streamers-start');
export const fetchSuccess = createAction('twitch/fetch-streamers-success');
export const fetchError = createAction('twitch/fetch-streamers-error');

export default createReducer(
    {
        [fetchStart]: (state, payload) =>
            state.set('loading', true).set('error', false),

        [fetchSuccess]: (state, payload) =>
            state
                .set('streamers', payload)
                .set('loading', false)
                .set('error', false),

        [fetchError]: (state, payload) =>
            state.set('loading', false).set('error', payload),
    },
    initState,
);
