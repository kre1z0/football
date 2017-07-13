import React from 'react';
import { Badge } from 'reactstrap';
import moment from 'moment';

import styles from './fixtures-item.scss';

const getColor = (goals, missed) => {
    if (goals > missed) return 'success';
    else if (goals === missed) return 'default';
    else return 'danger';
};

const getFontWeight = (goals, missed) => {
    if (goals > missed) return 'bold';
    return 'normal';
};

const FixturesItem = ({
    fixture: {
        awayTeamName,
        date,
        homeTeamName,
        matchday,
        odds,
        result: { goalsHomeTeam, goalsAwayTeam },
        Object,
        status,
    },
}) => {
    const formattedDate = moment(date).format('D MMMM');
    return (
        <div className={styles.item}>
            <span className={styles.date}>
                {formattedDate}
            </span>
            <Badge
                color={getColor(goalsHomeTeam, goalsAwayTeam)}
                className={styles.homeTeam}
            >
                {homeTeamName}
            </Badge>
            <span
                style={{
                    fontWeight: getFontWeight(goalsHomeTeam, goalsAwayTeam),
                }}
            >
                {goalsHomeTeam}
            </span>
            {status === null || status === 'TIMED' || status === 'SCHEDULED'
                ? 'vs'
                : ':'}
            <span
                style={{
                    fontWeight: getFontWeight(goalsAwayTeam, goalsHomeTeam),
                }}
            >
                {goalsAwayTeam}
            </span>
            <Badge
                color={getColor(goalsAwayTeam, goalsHomeTeam)}
                className={styles.awayTeam}
            >
                {awayTeamName}
            </Badge>
        </div>
    );
};

export default FixturesItem;
