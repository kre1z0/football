import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import withError from '../../hoc/withError';
import { getCompetition } from '../../ducks/api';
import League from '../../components/league';

class Home extends Component {
    componentDidMount() {
        const { getCompetition } = this.props;
        getCompetition && getCompetition({ season: 2017 });
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }

    render() {
        const { league, loading, goLeagueTable } = this.props;
        return (
            <div>
                <League
                    loading={loading}
                    league={league}
                    goLeagueTable={goLeagueTable}
                />
            </div>
        );
    }
}

const mapProps = ({ api: { league, loading, error } }) => ({
    error,
    league,
    loading,
});

const mapActions = {
    getCompetition,
};

export default connect(mapProps, mapActions)(withError(withRouter(Home)));
