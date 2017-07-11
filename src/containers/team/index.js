import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

import { getTeamPlayers } from '../../ducks/api';
import Table from '../../components/table';

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

class Team extends Component {
    componentDidMount() {
        const { getTeamPlayers, teamId } = this.props;
        getTeamPlayers && getTeamPlayers(teamId);
    }

    render() {
        console.log('players', this.props.players);
        return <Table title="players" tHead={headers} />;
    }
}

const mapProps = (
    { api: { players: { players, count } } },
    { match: { params } },
) => {
    const teamId = params.teamId && params.teamId.split('-')[0];
    return {
        teamId,
        players,
    };
};

const mapActions = {
    getTeamPlayers,
};

export default connect(mapProps, mapActions)(Team);
