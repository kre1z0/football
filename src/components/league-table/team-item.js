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
            position,
            logo,
            club,
            played,
            won,
            drawn,
            lost,
            gf,
            ga,
            gd,
            points,
        } = this.props;
        const { loading } = this.state;
        return (
            <tr className={styles.teamRow}>
                <td className="rank">
                    {position}
                </td>
                <td>
                    <img
                        style={{ display: 'none' }}
                        onLoad={this.onLoadLogo}
                        src={logo}
                        alt=""
                    />
                    {loading
                        ? <div className={styles.teamEmblemBlock}>
                              <img
                                  className={styles.teamEmblemImg}
                                  src={logo}
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
                    {gf}
                </td>
                <td>
                    {ga}
                </td>
                <td>
                    {gd}
                </td>
                <td>
                    {points}
                </td>
            </tr>
        );
    }
}

export default TeamItem;
