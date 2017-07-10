import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { indigo900, indigo500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import cn from 'classnames';

import { getSeson, getCompetition } from '../ducks/api';
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
        selectedSeason: 2017,
    };

    goSeason = (params, season) => {
        const { selectedSeason } = this.state;
        const { location: { pathname } } = this.props;
        const { getCompetition } = this.props;
        if (pathname !== '/' || selectedSeason !== season) {
            this.props.history.push('/');
            getCompetition && getCompetition(params, season);
            this.setState({
                selectedSeason: season,
            });
        }
    };
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }
    render() {
        const { goHome } = this.props;
        const { seasons, selectedSeason } = this.state;
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
                                {seasons.map(season => {
                                    const classNameNav = cn(styles.season, {
                                        [styles.selected]:
                                            selectedSeason === season,
                                    });
                                    return (
                                        <div
                                            onTouchTap={() =>
                                                this.goSeason(
                                                    {
                                                        season: season,
                                                    },
                                                    season,
                                                )}
                                            className={classNameNav}
                                            key={season}
                                        >
                                            {season}
                                        </div>
                                    );
                                })}
                            </Block>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapProps = () => ({});

const mapActions = {
    getSeson,
    getCompetition,
};

export default withRouter(connect(mapProps, mapActions)(App));
