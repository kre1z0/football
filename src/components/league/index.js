import React, { Component } from 'react';
import moment from 'moment'; // ➡ http://momentjs.com/

import Block from '../../components/block';
import withLoader from '../../hoc/withLoader';

class League extends Component {
    render() {
        const { league, goLeagueTable } = this.props;
        return (
            <Block>
                {league.map(
                    (
                        { caption, id, league, numberOfMatchdays, lastUpdated },
                        index,
                    ) => {
                        const time = moment(lastUpdated)
                            .startOf('hour')
                            .fromNow();
                        return (
                            <div
                                key={id}
                                onTouchTap={() =>
                                    goLeagueTable(
                                        id,
                                        league,
                                        numberOfMatchdays,
                                    )}
                            >
                                {caption}
                                <span>
                                    {time}
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
