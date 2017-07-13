import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import withError from '../../hoc/withError';
import withRouter from '../../hoc/withRouter';
import { getLeague } from '../../ducks/api';
import Table from '../../components/table';
import Pagination from '../../components/pagination';
import TeamItem from '../../components/team/team-item';
import FixturesItem from '../../components/fixtures/fixtures-item';
import Block from '../../components/block';
import Loader from '../../components/loader';

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
        const { getLeague, leagueId, currentMatchDay } = this.props;
        getLeague(leagueId, { matchday: currentMatchDay });
    }

    componentWillReceiveProps(nextProps) {
        const { getLeague, leagueId, currentMatchDay } = this.props;
        if (currentMatchDay !== nextProps.currentMatchDay) {
            getLeague(leagueId, {
                matchday: nextProps.currentMatchDay,
            });
        }
    }

    render() {
        const {
            numberOfMatchdays,
            leagueId,
            goTeam,
            loading,
            goLeagueTable,
            currentMatchDay,
            leagueTable: { standing, leagueCaption, fixtures },
        } = this.props;
        const rounds = Array.from(
            { length: numberOfMatchdays },
            (_, index) => index + 1,
        );
        return (
            <Block style={{ marginBottom: 20 }}>
                <Helmet>
                    <title>
                        {leagueCaption}
                    </title>
                </Helmet>
                <div className={styles.leagueContainer}>
                    <div className={styles.title}>
                        {leagueCaption}
                    </div>
                    <Pagination
                        numberOfMatchdays={numberOfMatchdays}
                        goLeagueTable={goLeagueTable}
                        currentMatchday={currentMatchDay}
                        leagueId={leagueId}
                        items={rounds}
                    />
                    {loading
                        ? <Loader />
                        : <div>
                              <div className={styles.fixtures}>
                                  {fixtures &&
                                      fixtures.map(item =>
                                          <FixturesItem
                                              key={item.homeTeamName}
                                              fixture={item}
                                          />,
                                      )}
                              </div>
                              <Table loading={loading} tHead={headers}>
                                  {standing &&
                                      standing.map(team =>
                                          <TeamItem
                                              team={team}
                                              goTeam={goTeam}
                                              key={team.teamName}
                                          />,
                                      )}
                              </Table>
                          </div>}
                </div>
            </Block>
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
    getLeague,
};

export default connect(mapProps, mapActions)(withRouter(withError(League)));
