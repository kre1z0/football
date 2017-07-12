import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import withError from '../../hoc/withError';
import withRouter from '../../hoc/withRouter';
import { getTableFromLeague, getLeagueRound } from '../../ducks/api';
import Table from '../../components/table';
import TeamItem from '../../components/team/team-item';
import Pagination from '../../components/pagination';

const headers = [
    'Rank',
    'Club',
    'Played',
    'Won',
    'Drawn',
    'Lost',
    'GF',
    'GA',
    'GD',
    'Points',
];

class League extends Component {
    componentDidMount() {
        const {
            getTableFromLeague,
            getLeagueRound,
            leagueId,
            currentMatchDay,
        } = this.props;
        getTableFromLeague &&
            getTableFromLeague(leagueId, { matchday: currentMatchDay });
        getLeagueRound &&
            getLeagueRound(leagueId, { matchday: currentMatchDay });
    }

    componentWillReceiveProps(nextProps) {
        const {
            getTableFromLeague,
            getLeagueRound,
            leagueId,
            currentMatchDay,
        } = this.props;
        if (currentMatchDay !== nextProps.currentMatchDay) {
            getTableFromLeague &&
                getTableFromLeague(leagueId, {
                    matchday: nextProps.currentMatchDay,
                });
            getLeagueRound &&
                getLeagueRound(leagueId, {
                    matchday: nextProps.currentMatchDay,
                });
        }
    }

    render() {
        const {
            loading,
            numberOfMatchdays,
            leagueId,
            goTeam,
            goLeagueTable,
            currentMatchDay,
            leagueTable: { standing, leagueCaption },
        } = this.props;
        const rounds = Array.from(
            { length: numberOfMatchdays },
            (_, index) => index + 1,
        );
        return (
            <Table
                pagination={
                    <Pagination
                        numberOfMatchdays={numberOfMatchdays}
                        goLeagueTable={goLeagueTable}
                        currentMatchday={currentMatchDay}
                        leagueId={leagueId}
                        label="rounds:"
                        items={rounds}
                    />
                }
                loading={loading}
                title={leagueCaption}
                tHead={headers}
            >
                <Helmet>
                    <title>
                        {leagueCaption}
                    </title>
                </Helmet>
                {standing &&
                    standing.map(team =>
                        <TeamItem
                            team={team}
                            goTeam={goTeam}
                            key={team.teamName}
                        />,
                    )}
            </Table>
        );
    }
}

const mapProps = (
    { api: { leagueTable, error, loading } },
    { match: { params } },
) => {
    const leagueId = params.leagueId && params.leagueId.split('-')[0];
    const numberOfMatchdays = params.leagueId && params.leagueId.split('-')[1];
    const currentMatchDay = params.leagueId && params.leagueId.split('-')[2];
    return {
        loading,
        leagueTable,
        leagueId,
        numberOfMatchdays,
        currentMatchDay,
        error,
    };
};

const mapActions = {
    getTableFromLeague,
    getLeagueRound,
};

export default connect(mapProps, mapActions)(withRouter(withError(League)));
