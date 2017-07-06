import React from 'react';

import styles from './team-item.scss';

const TeamItem = ({ name, logo }) =>
    <tr>
        <td className={styles.teamEmblemTd}>
            <img className={styles.teamEmblemImg} src={logo} alt={name} />
        </td>
        <td>
            {name}
        </td>
    </tr>;

export default TeamItem;
