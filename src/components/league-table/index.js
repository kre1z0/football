import React, { Component } from 'react';

import TeamItem from './team-item';
import Header from './header';
import HiddenHeader from './hidden-header';

import styles from './league-table.scss';

const header = ['Position', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'Points'];

class LeagueTable extends Component {
    state = {
        columnsWidth: {},
    };
    onRef = (ref, columnIndex) => {
        if (
            this._columnsWidth[columnIndex] === ref.offsetWidth ||
            ref.offsetWidth === 0
        )
            return;

        this._columnsWidth[columnIndex] = ref.offsetWidth;

        if (Object.keys(this._columnsWidth).length === header.length) {
            this.setState(state => ({
                columnsWidth: this._columnsWidth,
            }));
        }
    };
    _columnsWidth = {};
    render() {
        const { teams } = this.props;
        const { columnsWidth } = this.state;
        console.log('columnsWidth', columnsWidth);
        return (
            <div>
                <Header header={header} columnsWidth={columnsWidth} />
                <table className={styles.leagueTable}>
                    <HiddenHeader header={header} onRef={this.onRef} />
                    <tbody>
                        {teams &&
                            teams.map(
                                ({
                                    teamName,
                                    crestURI,
                                    position,
                                    wins,
                                    draws,
                                    points,
                                    losses,
                                    playedGames,
                                }) => {
                                    return (
                                        <TeamItem
                                            key={teamName}
                                            position={position}
                                            logo={crestURI}
                                            club={teamName}
                                            played={playedGames}
                                            won={wins}
                                            drawn={draws}
                                            lost={losses}
                                            points={points}
                                        />
                                    );
                                },
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LeagueTable;
