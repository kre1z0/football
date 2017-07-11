import React from 'react';

import styles from '../player/player-item.scss';

const PlayerItem = ({
    player: {
        contractUntil,
        dateOfBirth,
        jerseyNumber,
        marketValue,
        name,
        nationality,
        position,
    },
}) => {
    return (
        <tr className={styles.teamRow}>
            <td>
                {jerseyNumber}
            </td>
            <td>
                {nationality}
            </td>
            <td>
                {position}
            </td>
            <td>
                {name}
            </td>
            <td>
                {dateOfBirth}
            </td>
            <td>
                {contractUntil}
            </td>
        </tr>
    );
};

export default PlayerItem;
