export const apiURL = 'http://api.football-data.org/v1/';

const apiToken = 'f5a4c94efb8e4afa906ded67d4c75797';

export const headers = {
    'X-Auth-Token': apiToken,
};

export function getQuery(options = {}) {
    options = JSON.parse(JSON.stringify(options));
    const esc = encodeURIComponent;
    const query = Object.keys(options)
        .map(k => esc(k) + '=' + esc(options[k]))
        .join('&');
    if (query === '') return '';
    return '/?' + query;
}

//export default {
//    // ➡ league id
//    getAllTeam(id = '') {
//        const url = `competitions/${id}/teams`;
//        return request(url);
//    },
//    // ➡ league id / matchday=/\d+/
//    getLeagueTable(id = '', params) {
//        const url = `competitions/${id}/leagueTable${getQuery(params)}`;
//        return request(url);
//    },
//    // ➡ league id timeFrame=/p|n[1-9]{1,2} matchday=/\d+/
//    getListAllFixtures(id, params) {
//        const url = `competitions/${id}/fixtures${getQuery(params)}`;
//        return request(url);
//    },
//    getTeam(id = '') {
//        const url = `teams/${id}`;
//        return request(url);
//    },
//    getTeamPayers(id = '') {
//        const url = `teams/${id}/players`;
//        return request(url);
//    },
//};
