import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import { getCompetition } from '../../ducks/api';
import League from '../../components/league';

import './home.scss';

class Home extends Component {
    state = {
        season: 2016,
    };

    componentDidMount() {
        const { season } = this.state;
        const { getCompetition } = this.props;
        getCompetition && getCompetition({ season: season });
    }

    render() {
        const { league, goTeams, loading, goLeagueTable } = this.props;
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

const mapProps = ({ api: { league, loading } }) => ({
    league,
    loading,
});

const mapActions = {
    getCompetition,
};

export default connect(mapProps, mapActions)(withRouter(Home));
