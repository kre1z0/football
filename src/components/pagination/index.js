import React, { Component } from 'react';
import cn from 'classnames';

import styles from './pagination.scss';

class PaginationTour extends Component {
    render() {
        const {
            items,
            label,
            numberOfMatchdays,
            goLeagueTable,
            currentMatchday,
            leagueId,
        } = this.props;
        return (
            <div className={styles.pagination}>
                <div className={styles.label}>
                    {label}
                </div>
                {items &&
                    items.map(round => {
                        const classNameNav = cn(styles.item, {
                            [styles.active]: Number(currentMatchday) === round,
                        });
                        return (
                            <div
                                key={round}
                                onTouchTap={() =>
                                    goLeagueTable(
                                        leagueId,
                                        numberOfMatchdays,
                                        round,
                                    )}
                                className={classNameNav}
                            >
                                {round}
                            </div>
                        );
                    })}
            </div>
        );
    }
}

export default PaginationTour;
