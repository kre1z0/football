import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import { getLeagueRound } from '../../ducks/api';
import Fixture from '../../components/fixtures/fixtures-item';
import Pagination from '../../components/pagination';

class Round extends Component {
    componentDidMount() {
        const { getLeagueRound, round, leagueId } = this.props;
        getLeagueRound && getLeagueRound(leagueId, { matchday: round });
    }
    render() {
        const { rounds: { fixtures }, leagueCaption } = this.props;
        return (
            <div>
                <div>
                    <h1>
                        {leagueCaption}
                    </h1>
                    <Pagination />
                    {fixtures &&
                        fixtures.map(fixture =>
                            <Fixture
                                key={`${fixture.awayTeamName}-${fixture.homeTeamName}`}
                                fixture={fixture}
                            />,
                        )}
                </div>
            </div>
        );
    }
}

const mapProps = (
    { api: { rounds, error, loading } },
    { match: { params } },
) => {
    const round = params.leagueId && params.leagueId.split('-')[0];
    const leagueId = params.leagueId && params.leagueId.split('-')[1];
    return {
        loading,
        rounds,
        round,
        leagueId,
        error,
    };
};

const mapActions = {
    getLeagueRound,
};

export default connect(mapProps, mapActions)(withError(Round));
