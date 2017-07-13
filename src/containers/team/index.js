import React, { Component } from 'react';
import { connect } from 'react-redux';

import Block from '../../components/block';
import { getTeamPlayers } from '../../ducks/api';
import PlayerItem from '../../components/player/player-item';
import Table from '../../components/table';

import styles from './team.scss';

const headers = [
    '№',
    'Nationality',
    'Position',
    'Name',
    'Date of Birth',
    'Contract until',
];

class Team extends Component {
    componentDidMount() {
        const { getTeamPlayers, teamId } = this.props;
        getTeamPlayers && getTeamPlayers(teamId);
    }

    render() {
        const { players, loading, count, teamName } = this.props;
        return (
            <Block style={{ height: '100%' }}>
                <Table loading={loading} title={teamName} tHead={headers}>
                    {count === 0
                        ? <tr>
                              <td colSpan={headers.length}>
                                  <div className={styles.noPlayers}>
                                      no players data for this team...
                                  </div>
                              </td>
                          </tr>
                        : players &&
                          players.map(player =>
                              <PlayerItem key={player.name} player={player} />,
                          )}
                </Table>
            </Block>
        );
    }
}

const mapProps = (
    { api: { players: { players, count }, loading } },
    { match: { params } },
) => {
    const teamId = params.teamId && params.teamId.split('-')[0];
    const teamName = params.teamId && params.teamId.split('-')[1];
    return {
        teamName,
        count,
        loading,
        teamId,
        players,
    };
};

const mapActions = {
    getTeamPlayers,
};

export default connect(mapProps, mapActions)(Team);
