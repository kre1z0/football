import React, { Component } from 'react';
import moment from 'moment'; // ➡ http://momentjs.com/

import withLoader from '../../hoc/withLoader';

import styles from './league.scss';

class League extends Component {
    render() {
        const { league, goLeagueTable } = this.props;
        const leagueAmount = league.length;
        return (
            <div className={styles.leagueContainer}>
                {league &&
                    league.map(
                        (
                            {
                                caption,
                                id,
                                league,
                                currentMatchday,
                                numberOfMatchdays,
                                lastUpdated,
                            },
                            index,
                        ) => {
                            const time = moment(lastUpdated)
                                .startOf('hour')
                                .fromNow();
                            return (
                                <div
                                    style={{
                                        height: `${100 / leagueAmount}%`,
                                    }}
                                    className={styles.leagueItem}
                                    key={id}
                                    onTouchTap={() =>
                                        goLeagueTable(
                                            id,
                                            league,
                                            numberOfMatchdays,
                                        )}
                                >
                                    <div className={styles.caption}>
                                        {caption}
                                    </div>
                                    <div>
                                        <span className={styles.tour}>
                                            round:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {currentMatchday}
                                            </span>
                                        </span>
                                        <span className={styles.timeUpdate}>
                                            last update:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {time}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        },
                    )}
            </div>
        );
    }
}

export default withLoader(League);
