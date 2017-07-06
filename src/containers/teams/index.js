import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
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
        console.log('this.state', this.props.teams.teams);
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

const mapProps = ({ api: { teams } }, { match: { params } }) => {
    const leagueId = params.id && params.id.split('-')[0];
    return {
        leagueId: leagueId,
        teams,
    };
};

const mapActions = {
    getAllTeamsFromLeague,
};

export default withRouter(connect(mapProps, mapActions)(Teams));
