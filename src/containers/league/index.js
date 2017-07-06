import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import { getTableFromLeague } from '../../ducks/api';
import LeagueTable from '../../components/league-table/';

class League extends Component {
    componentDidMount() {
        const { getTableFromLeague, leagueId } = this.props;
        getTableFromLeague && getTableFromLeague(leagueId);
    }

    render() {
        const { leagueTable: { standing }, loading } = this.props;
        return (
            <div>
                <LeagueTable loading={loading} teams={standing} />
            </div>
        );
    }
}

const mapProps = (
    { api: { leagueTable, error, loading } },
    { match: { params } },
) => {
    const leagueId = params.leagueId && params.leagueId.split('-')[0];
    return {
        loading,
        leagueTable,
        leagueId: leagueId,
        error,
    };
};

const mapActions = {
    getTableFromLeague,
};

export default connect(mapProps, mapActions)(withError(League));
