import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { indigo900, indigo500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import cn from 'classnames';

import { getCompetition } from '../ducks/api';
import Block from '../components/block';
import withRouter from '../hoc/withRouter';

import styles from './app.scss';

const iconStyles = {
    width: 50,
    height: 50,
    marginRight: 20,
};

const HomeIcon = props =>
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>;

class App extends Component {
    state = {
        seasons: [2015, 2016, 2017],
    };

    goSeason = (params, selectedSeason) => {
        const { season, location: { pathname } } = this.props;
        const { getCompetition } = this.props;
        if (pathname !== '/' || selectedSeason !== season) {
            this.props.history.push('/');
            getCompetition && getCompetition(params, selectedSeason);
        }
    };

    render() {
        const { goHome, season } = this.props;
        const { seasons } = this.state;
        return (
            <div className="app-container">
                <Container className={styles.height}>
                    <Row className={styles.height}>
                        <Col className={styles.pagesContainer} md="12">
                            <Block className={styles.navBar}>
                                <HomeIcon
                                    className={styles.homeLink}
                                    onTouchTap={goHome}
                                    style={iconStyles}
                                    color={indigo900}
                                    hoverColor={indigo500}
                                />
                                {seasons.map(seasonNumber => {
                                    const classNameNav = cn(styles.season, {
                                        [styles.selected]:
                                            seasonNumber === season,
                                    });
                                    return (
                                        <div
                                            onTouchTap={() =>
                                                this.goSeason(
                                                    {
                                                        season: seasonNumber,
                                                    },
                                                    seasonNumber,
                                                )}
                                            className={classNameNav}
                                            key={seasonNumber}
                                        >
                                            {seasonNumber}
                                        </div>
                                    );
                                })}
                            </Block>
                            <Block style={{ height: '100%' }}>
                                {this.props.children}
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapProps = ({ api: { season } }) => ({
    season,
});

const mapActions = {
    getCompetition,
};

export default withRouter(connect(mapProps, mapActions)(App));
