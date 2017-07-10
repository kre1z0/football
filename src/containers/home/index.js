import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import withError from '../../hoc/withError';
import { getCompetition } from '../../ducks/api';
import League from '../../components/league';

class Home extends Component {
    componentDidMount() {
        const { getCompetition, season } = this.props;
        getCompetition && getCompetition({ season: season }, season);
    }

    render() {
        const { league, loading, goLeagueTable } = this.props;
        return (
            <League
                loading={loading}
                league={league}
                goLeagueTable={goLeagueTable}
            />
        );
    }
}

const mapProps = ({ api: { league, loading, error, season } }) => ({
    error,
    league,
    loading,
    season,
});

const mapActions = {
    getCompetition,
};

export default connect(mapProps, mapActions)(withError(withRouter(Home)));
