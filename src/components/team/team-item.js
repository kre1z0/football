import React, { Component } from 'react';

import noLogo from '../../assets/images/no-logo.png';

import styles from './team-item.scss';

class TeamItem extends Component {
    state = {
        loading: false,
    };
    onLoadLogo = () => {
        this.setState({
            loading: true,
        });
    };
    render() {
        const {
            goTeam,
            team: {
                teamName,
                crestURI,
                position,
                wins,
                draws,
                points,
                losses,
                playedGames,
                goals,
                goalsAgainst,
                goalDifference,
                _links: { team: { href } },
            },
        } = this.props;
        const teamId = parseInt(href.split('teams/')[1], 10);
        const { loading } = this.state;
        return (
            <tr
                className={styles.teamRow}
                onTouchTap={() => goTeam(teamId, teamName)}
            >
                <td className="rank">
                    {position}
                </td>
                <td>
                    <img
                        style={{ display: 'none' }}
                        onLoad={this.onLoadLogo}
                        src={crestURI}
                        alt=""
                    />
                    {loading
                        ? <div className={styles.teamEmblemBlock}>
                              <img
                                  className={styles.teamEmblemImg}
                                  src={crestURI}
                                  alt=""
                              />
                          </div>
                        : <div className={styles.teamEmblemBlock}>
                              <img
                                  className={styles.teamEmblemImg}
                                  src={noLogo}
                                  alt=""
                              />
                          </div>}
                    {teamName}
                </td>
                <td>
                    {playedGames}
                </td>
                <td>
                    {wins}
                </td>
                <td>
                    {draws}
                </td>
                <td>
                    {losses}
                </td>
                <td>
                    {goals}
                </td>
                <td>
                    {goalsAgainst}
                </td>
                <td>
                    {goalDifference}
                </td>
                <td>
                    {points}
                </td>
            </tr>
        );
    }
}

export default TeamItem;
