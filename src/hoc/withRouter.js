import React, { Component } from 'react';
import getDisplayName from './getDisplayName';

import { withRouter } from 'react-router-dom';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        isHome = () => this.props.location.pathname === '/';
        goHome = () => this.props.history.push('/');

        goTeam = (id = '', team) =>
            this.props.history.push(`/team/${id}-${team}`);

        goLeagueTable = (leagueId = '', matchdays = '', matchday = {}) =>
            this.props.history.push(
                `/league/${leagueId}-${matchdays}-${matchday}`,
            );

        goToRound = (id, matchday = {}) =>
            this.props.history.push(`/round/${id}-${matchday}`);

        render() {
            return (
                <EnhancedComponent
                    isHome={this.isHome}
                    goHome={this.goHome}
                    goTeam={this.goTeam}
                    goLeagueTable={this.goLeagueTable}
                    goToRound={this.goToRound}
                    {...this.state}
                    {...this.props}
                />
            );
        }
    }

    Enhancer.displayName = `withRouter(${getDisplayName(EnhancedComponent)})`;

    return withRouter(Enhancer);
}
