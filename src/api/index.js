const apiURL = 'http://api.football-data.org/v1/';

const apiToken = 'f5a4c94efb8e4afa906ded67d4c75797';

function parseJSON(response) {
    return response.json();
}

function getHeaders() {
    return {
        'X-Auth-Token': apiToken,
    };
}

function getQuery(options) {
    const esc = encodeURIComponent;
    const query = Object.keys(options)
        .map(k => '/?' + esc(k) + '=' + esc(options[k]))
        .join('&');
    return query;
}

function request(url, options) {
    const endpoint = apiURL + url;
    const headers = getHeaders();
    const advancedOptions = { ...options, headers };

    return new Promise((resolve, reject) => {
        fetch(endpoint, advancedOptions).then(response => {
            if (response.ok) {
                parseJSON(response).then(response => resolve(response));
            } else {
                parseJSON(response).then(response => reject(response));
            }
        });
    });
}

export default {
    //  ➡  season=/\d\d\d\d/ year
    getCompetition(year = '') {
        const params = {
            season: year,
        };
        const url = `competitions${params && getQuery(params)}`;
        return request(url);
    },
    //  ➡  league id
    getAllTeam(id = '') {
        const url = `competitions/${id}/teams`;
        return request(url);
    },
    //  ➡  matchday=/\d+/
    getLeagueTable(id = '', day = '') {
        const params = {
            matchday: day,
        };
        const url = `competitions/${id}/leagueTable${params &&
            getQuery(params)}`;
        return request(url);
    },
};
