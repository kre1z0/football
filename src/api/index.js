export const apiURL = 'https://api.football-data.org/v1/';

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
