import React, { Component } from 'react';

import withLoader from '../../hoc/withLoader';
import TeamItem from './team-item';
import HiddenHeader from '../../components/league-table/hidden-header';

import styles from './league-table.scss';

class Body extends Component {
    render() {
        const { teams, header, onRef } = this.props;
        return (
            <div className={styles.leagueGrid}>
                <table className={styles.leagueTable}>
                    <HiddenHeader header={header} onRef={onRef} />
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
                                    goals,
                                    goalsAgainst,
                                    goalDifference,
                                }) =>
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
                                        gf={goals}
                                        ga={goalsAgainst}
                                        gd={goalDifference}
                                    />,
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withLoader(Body);
