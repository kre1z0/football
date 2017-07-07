import React from 'react';
import styles from './team-item.scss';

const TeamItem = ({ position, logo, club, played, won, drawn, lost, points }) =>
    <tr className={styles.teamRow}>
        <td>
            {position}
        </td>
        <td>
            <div className={styles.teamEmblemBlock}>
                <img className={styles.teamEmblemImg} src={logo} alt={club} />
            </div>
            {club}
        </td>
        <td>
            {played}
        </td>
        <td>
            {won}
        </td>
        <td>
            {drawn}
        </td>
        <td>
            {lost}
        </td>
        <td>
            {points}
        </td>
    </tr>;

export default TeamItem;
