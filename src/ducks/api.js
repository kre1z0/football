import { headers, getQuery, apiURL } from '../api';
import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

const apiState = Record({
    league: undefined,
    teams: undefined,
    leagueTable: undefined,
    error: undefined,
    loading: undefined,
    season: undefined,
});

const initState = new apiState({
    league: [],
    teams: {},
    leagueTable: {},
    error: false,
    loading: false,
    season: 2017,
});

const fetchLeagueStart = createAction('api/fetch-league-start');
const fetchLeagueSuccess = createAction('api/fetch-league-success');
const fetchLeagueError = createAction('api/fetch-league-error');

export const getCompetition = (params = {}, season) => dispatch => {
    console.log('season --->', season);
    dispatch(fetchLeagueStart(season));
    const url = `${apiURL}competitions${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => {
            if (response.error) dispatch(fetchLeagueError(response.error));
            else dispatch(fetchLeagueSuccess(response));
        })
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
        .then(response => {
            if (response.error) dispatch(fetchTeamsError(response.error));
            else dispatch(fetchTeamsSuccess(response));
        })
        .catch(error => dispatch(fetchTeamsError(error)));
};

const fetchLeagueTableStart = createAction('api/fetch-league-table-start');
const fetchLeagueTableSuccess = createAction('api/fetch-league-table-success');
const fetchLeagueTableError = createAction('api/fetch-league-table-error');

export const getTableFromLeague = (id, params) => dispatch => {
    dispatch(fetchLeagueTableStart());
    const url = `${apiURL}competitions/${id}/leagueTable${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => {
            if (response.error) dispatch(fetchLeagueTableError(response.error));
            else dispatch(fetchLeagueTableSuccess(response));
        })
        .catch(error => dispatch(fetchLeagueTableError(error)));
};

export default createReducer(
    {
        [fetchLeagueStart]: (state, payload) =>
            state.set('loading', true).set('season', payload),
        [fetchLeagueSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('league', payload),
        [fetchLeagueError]: (state, payload) => state.set('error', payload),

        [fetchLeagueError]: (state, payload) => state.set('error', payload),

        [fetchTeamsStart]: (state, payload) => state.set('loading', true),
        [fetchTeamsSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('teams', payload),
        [fetchTeamsError]: (state, payload) => state.set('error', payload),

        [fetchLeagueTableStart]: (state, payload) => state.set('loading', true),
        [fetchLeagueTableSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('leagueTable', payload),
        [fetchLeagueTableError]: (state, payload) =>
            state.set('error', payload),
    },
    initState,
);
