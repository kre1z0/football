import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import { getTableFromLeague } from '../../ducks/api';
import LeagueTable from '../../components/league-table/';

class League extends Component {
    componentDidMount() {
        const { getTableFromLeague, leagueId, matchDay } = this.props;
        getTableFromLeague &&
            getTableFromLeague(leagueId, { matchday: matchDay });
    }

    render() {
        const { leagueTable: { standing }, loading } = this.props;
        console.log('standing', standing);
        return (
            <div>
                {standing && <LeagueTable loading={loading} teams={standing} />}
            </div>
        );
    }
}

const mapProps = (
    { api: { leagueTable, error, loading } },
    { match: { params } },
) => {
    const leagueId = params.leagueId && params.leagueId.split('-')[0];
    const matchDay = params.leagueId && params.leagueId.split('-')[2];
    return {
        loading,
        leagueTable,
        leagueId,
        matchDay,
        error,
    };
};

const mapActions = {
    getTableFromLeague,
};

export default connect(mapProps, mapActions)(withError(League));
