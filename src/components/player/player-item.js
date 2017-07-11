import React, { Component } from 'react';

import styles from '../team/team-item.scss';

class TeamItem extends Component {
    render() {
        const {
            contractUntil,
            dateOfBirth,
            jerseyNumber,
            marketValue,
            name,
            nationality,
            position,
        } = this.props;
        return (
            <tr className={styles.teamRow}>
                <td>1</td>
                <td>2tertert</td>
                <td>2tertert</td>
                <td>2tertert</td>
                <td>2tertert</td>
            </tr>
        );
    }
}

export default TeamItem;
