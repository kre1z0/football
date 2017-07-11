import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import withRouter from '../../hoc/withRouter';
import { getTableFromLeague } from '../../ducks/api';
import Loader from '../../components/loader';
import Table from '../../components/table';
import TeamItem from '../../components/team/team-item';

import styles from './league.scss';

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
        console.log('componentDidMount');
        const { getTableFromLeague, leagueId, matchDay } = this.props;
        getTableFromLeague &&
            getTableFromLeague(leagueId, { matchday: matchDay });
    }
    render() {
        const {
            loading,
            goTeam,
            leagueTable: { standing, leagueCaption },
        } = this.props;
        return (
            <Table title={leagueCaption} tHead={headers}>
                {standing &&
                    standing.map(
                        ({
                            teamName,
                            crestURI,
                            position,
                            wins,
                            draws,
                            points,
                            losses,
                            playedGames,
                            goals,
                            goalsAgainst,
                            goalDifference,
                            _links: { team: { href } },
                        }) => {
                            const teamId = parseInt(
                                href.split('teams/')[1],
                                10,
                            );
                            return (
                                <TeamItem
                                    goTeam={() => goTeam(teamId, teamName)}
                                    key={teamName}
                                    position={position}
                                    logo={crestURI}
                                    club={teamName}
                                    played={playedGames}
                                    won={wins}
                                    drawn={draws}
                                    lost={losses}
                                    points={points}
                                    gf={goals}
                                    ga={goalsAgainst}
                                    gd={goalDifference}
                                />
                            );
                        },
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

export default connect(mapProps, mapActions)(withRouter(withError(League)));
