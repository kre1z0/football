import { headers, getQuery, apiURL } from '../api';
import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

const apiState = Record({
    league: undefined,
    leagueTable: undefined,
    error: undefined,
    loading: undefined,
    season: undefined,
    players: undefined,
    rounds: undefined,
});

const initState = new apiState({
    league: [],
    leagueTable: {},
    error: false,
    loading: false,
    season: 2017,
    players: {},
    rounds: {},
});

const fetchLeagueStart = createAction('api/fetch-league-start');
const fetchLeagueSuccess = createAction('api/fetch-league-success');
const fetchLeagueError = createAction('api/fetch-league-error');

export const getCompetition = (params = {}, season) => dispatch => {
    dispatch(fetchLeagueStart(season));
    const url = `${apiURL}competitions${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => {
            if (response.error) dispatch(fetchLeagueError(response.error));
            else dispatch(fetchLeagueSuccess(response));
        })
        .catch(({ message }) => dispatch(fetchLeagueError(message)));
};

const fetchLeagueTableStart = createAction('api/fetch-league-table-start');
const fetchLeagueTableSuccess = createAction('api/fetch-league-table-success');
const fetchLeagueTableError = createAction('api/fetch-league-table-error');

export const getTableFromLeague = (id, params) => {
    const url = `${apiURL}competitions/${id}/leagueTable${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error);
};

export const getLeagueRound = (id, params) => {
    const url = `${apiURL}competitions/${id}/fixtures${getQuery(params)}`;
    return fetch(url, { headers })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error);
};

export const getLeague = (id, params) => dispatch => {
    dispatch(fetchLeagueTableStart());
    return Promise.all([
        getTableFromLeague(id, params),
        getLeagueRound(id, params),
    ])
        .then(([competition, fixtures]) => {
            if (competition.error || fixtures.error) {
                dispatch(
                    fetchLeagueTableError(competition.error || fixtures.error),
                );
            } else {
                dispatch(
                    fetchLeagueTableSuccess({
                        ...competition,
                        ...fixtures,
                    }),
                );
            }
        })
        .catch(error => dispatch(fetchLeagueTableError(error)));
};

const fetchTeamPlayersStart = createAction('api/fetch-team-players-start');
const fetchTeamPlayersSuccess = createAction('api/fetch-team-players-success');
const fetchTeamPlayersError = createAction('api/fetch-team-players-error');

export const getTeamPlayers = id => (dispatch, getState) => {
    const teamId = getState().api.players.id;
    if (teamId !== id) {
        dispatch(fetchTeamPlayersStart());
        const url = `${apiURL}teams/${id}/players`;
        return fetch(url, { headers })
            .then(response => response.json())
            .then(response => {
                if (response.error)
                    dispatch(fetchTeamPlayersError(response.error));
                else {
                    response.id = id;
                    dispatch(fetchTeamPlayersSuccess(response));
                }
            })
            .catch(error => dispatch(fetchTeamPlayersError(error)));
    }
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

        [fetchLeagueTableStart]: (state, payload) => state.set('loading', true),
        [fetchLeagueTableSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('leagueTable', payload),
        [fetchLeagueTableError]: (state, payload) =>
            state.set('error', payload),

        [fetchTeamPlayersStart]: (state, payload) => state.set('loading', true),
        [fetchTeamPlayersSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('players', payload),
        [fetchTeamPlayersError]: (state, payload) =>
            state.set('error', payload),
    },
    initState,
);
