import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import { getAllTeamsFromLeague } from '../../ducks/api';

class Teams extends Component {
    state = {
        teams: [],
    };
    componentDidMount() {
        const { getAllTeamsFromLeague, leagueId } = this.props;
        getAllTeamsFromLeague && getAllTeamsFromLeague(leagueId);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            teams: nextProps.teams.teams,
        });
    }

    render() {
        const { teams } = this.state;
        return (
            <div>
                {teams &&
                    teams.map(({ name }) => {
                        return (
                            <div key={name}>
                                {name}
                            </div>
                        );
                    })}
            </div>
        );
    }
}

const mapProps = ({ api: { teams, error } }, { match: { params } }) => {
    const leagueId = params.id && params.id.split('-')[0];
    return {
        teams,
        leagueId: leagueId,
        error,
    };
};

const mapActions = {
    getAllTeamsFromLeague,
};

export default connect(mapProps, mapActions)(withError(Teams));
