import React, { Component } from 'react';
import { connect } from 'react-redux';

import withError from '../../hoc/withError';
import { getTableFromLeague } from '../../ducks/api';
import Header from '../../components/league-table/header';
import Block from '../../components/block';
import Body from '../../components/league-table';

import styles from './league.scss';

const header = ['Rank', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'Points'];

class League extends Component {
    state = {
        columnsWidth: {},
    };

    componentDidMount() {
        const { getTableFromLeague, leagueId, matchDay } = this.props;
        getTableFromLeague &&
            getTableFromLeague(leagueId, { matchday: matchDay });
    }

    onRef = (ref, columnIndex) => {
        if (
            this._columnsWidth[columnIndex] === ref.offsetWidth ||
            ref.offsetWidth === 0
        )
            return;

        this._columnsWidth[columnIndex] = ref.offsetWidth;

        if (Object.keys(this._columnsWidth).length === header.length) {
            this.setState(state => ({
                columnsWidth: this._columnsWidth,
            }));
        }
    };

    _columnsWidth = {};

    render() {
        const { leagueTable: { standing } } = this.props;
        const { columnsWidth } = this.state;
        console.log('standing', standing);
        return (
            <Block className={styles.tableBlock}>
                {standing &&
                    <div className={styles.leagueContainer}>
                        <Header header={header} columnsWidth={columnsWidth} />
                        <Body
                            header={header}
                            teams={standing}
                            onRef={this.onRef}
                        />
                    </div>}
            </Block>
        );
    }
}

const mapProps = (
    { api: { leagueTable, error, loading } },
    { match: { params } },
) => {
    const leagueId = params.leagueId && params.leagueId.split('-')[0];
    const matchDay = params.leagueId && params.leagueId.split('-')[2];
    return {
        loading,
        leagueTable,
        leagueId,
        matchDay,
        error,
    };
};

const mapActions = {
    getTableFromLeague,
};

export default connect(mapProps, mapActions)(withError(League));
