import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import withError from '../../hoc/withError';
import { getCompetition } from '../../ducks/api';
import League from '../../components/league';

class Home extends Component {
    componentDidMount() {
        const { getCompetition, season } = this.props;
        getCompetition && getCompetition({ season: season }, season);
    }

    render() {
        const { league, loading } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Football</title>
                </Helmet>
                {league && <League loading={loading} league={league} />}
            </div>
        );
    }
}

const mapProps = ({ api: { league, loading, error, season } }) => ({
    loading,
    error,
    league,
    season,
});

const mapActions = {
    getCompetition,
};

export default connect(mapProps, mapActions)(withError(Home));
