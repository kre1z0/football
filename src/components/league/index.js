import React, { Component } from 'react';
import withLoader from '../../hoc/withLoader';

class League extends Component {
    render() {
        const { league, goLeagueTable } = this.props;
        return (
            <div>
                {league.map(
                    ({ caption, id, league, numberOfMatchdays }, index) => {
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
                                {index + 1}
                                {caption}
                            </div>
                        );
                    },
                )}
            </div>
        );
    }
}

export default withLoader(League);
