import React, { Component } from 'react';

import withLoader from '../../hoc/withLoader';
import TeamItem from './team-item';

import styles from './league-table.scss';

class LeagueTable extends Component {
    render() {
        const { teams } = this.props;
        return (
            <table>
                <tbody>
                    {teams &&
                        teams.map(({ teamName, crestURI }) => {
                            return <TeamItem name={teamName} logo={crestURI} />;
                        })}
                </tbody>
            </table>
        );
    }
}

export default withLoader(LeagueTable);
