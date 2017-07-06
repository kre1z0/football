import { headers, getQuery, apiURL } from '../api';
import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

const apiState = Record({
    league: undefined,
    teams: undefined,
    error: undefined,
    loading: undefined,
});

const initState = new apiState({
    league: [],
    teams: {},
    error: false,
    loading: false,
});

const fetchLeagueStart = createAction('api/fetch-league-start');
const fetchLeagueSuccess = createAction('api/fetch-league-success');
const fetchLeagueError = createAction('api/fetch-league-error');

export const getCompetition = params => dispatch => {
    dispatch(fetchLeagueStart());
    const url = `${apiURL}competitions${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => dispatch(fetchLeagueSuccess(response)))
        .catch(error => dispatch(fetchLeagueError(error)));
};

const fetchTeamsStart = createAction('api/fetch-teams-start');
const fetchTeamsSuccess = createAction('api/fetch-teams-success');
const fetchTeamsError = createAction('api/fetch-teams-error');

export const getAllTeamsFromLeague = id => dispatch => {
    dispatch(fetchTeamsStart());
    const url = `${apiURL}competitions/${id}/teams`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => dispatch(fetchTeamsSuccess(response)))
        .catch(error => dispatch(fetchTeamsError(error)));
};

export default createReducer(
    {
        [fetchLeagueStart]: (state, payload) => state.set('loading', true),
        [fetchLeagueSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('league', payload),
        [fetchLeagueError]: (state, payload) => state.set('error', payload),

        [fetchTeamsStart]: (state, payload) => state.set('loading', true),
        [fetchTeamsSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('teams', payload),
        [fetchTeamsError]: (state, payload) => state.set('error', payload),
    },
    initState,
);
