import React from 'react';

import styles from './fixtures-item.scss';

const FixturesItem = ({
    fixture: {
        awayTeamName,
        date,
        homeTeamName,
        matchday,
        odds,
        result,
        Object,
        status,
    },
}) => {
    return (
        <div className={styles.item}>
            <span>
                {awayTeamName}
            </span>
            <span>
                {homeTeamName}
            </span>
        </div>
    );
};

export default FixturesItem;
