import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import { getCompetition } from '../../ducks/api';
import League from '../../components/league';

import './home.scss';

class Home extends Component {
    state = {
        season: 2017,
    };

    componentDidMount() {
        const { season } = this.state;
        const { getCompetition } = this.props;
        getCompetition && getCompetition(season);
    }

    render() {
        const { league, goTeams, loading } = this.props;
        return (
            <div>
                <League loading={loading} league={league} goTeams={goTeams} />
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
