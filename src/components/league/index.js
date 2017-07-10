import React, { Component } from 'react';
import moment from 'moment'; // ➡ http://momentjs.com/
import { indigo900, indigo500 } from 'material-ui/styles/colors';

import Block from '../../components/block';
import withLoader from '../../hoc/withLoader';

import styles from './league.scss';

class League extends Component {
    render() {
        const { league, goLeagueTable } = this.props;
        return (
            <Block>
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
                                    className={styles.leagueItem}
                                    key={id}
                                    onTouchTap={() =>
                                        goLeagueTable(
                                            id,
                                            league,
                                            numberOfMatchdays,
                                        )}
                                >
                                    <span
                                        style={{
                                            color: indigo900,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {caption}
                                    </span>
                                    {' / '}
                                    <span>
                                        tour: {currentMatchday}
                                    </span>
                                    {' / '}
                                    <span>
                                        last update: {time}
                                    </span>
                                </div>
                            );
                        },
                    )}
            </Block>
        );
    }
}

export default withLoader(League);
