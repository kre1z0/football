import React, { Component } from 'react';
import withLoader from '../../hoc/withLoader';

class League extends Component {
    render() {
        const { league, goTeams } = this.props;
        return (
            <div>
                {league.map(({ caption, id, league }) => {
                    return (
                        <div key={id} onTouchTap={() => goTeams(id, league)}>
                            {caption}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withLoader(League);
