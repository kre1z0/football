import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import { getCompetition } from '../../ducks/api';

class Home extends Component {
    state = {
        season: 2017,
    };

    componentDidMount() {
        const { season } = this.state;
        const { getCompetition } = this.props;
        getCompetition && getCompetition(season);
    }

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

const mapProps = ({ api: { league } }) => ({
    league,
});

const mapActions = {
    getCompetition,
};

export default withRouter(connect(mapProps, mapActions)(Home));
