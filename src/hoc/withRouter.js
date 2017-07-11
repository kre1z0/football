import React, { Component } from 'react';
import getDisplayName from './getDisplayName';

import { withRouter } from 'react-router-dom';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        isHome = () => this.props.location.pathname === '/';
        goHome = () => this.props.history.push('/');

        goTeam = (id = '', team) =>
            this.props.history.push(`/team/${id}-${team}`);

        goLeagueTable = (id = '', league, matchday = {}) =>
            this.props.history.push(`/league/${id}-${league}-${matchday}`);

        render() {
            return (
                <EnhancedComponent
                    isHome={this.isHome}
                    goHome={this.goHome}
                    goTeam={this.goTeam}
                    goLeagueTable={this.goLeagueTable}
                    {...this.state}
                    {...this.props}
                />
            );
        }
    }

    Enhancer.displayName = `withRouter(${getDisplayName(EnhancedComponent)})`;

    return withRouter(Enhancer);
}
