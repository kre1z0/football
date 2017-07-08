import React, { Component } from 'react';
import { indigo900, indigo500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import { connect } from 'react-redux';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import Block from '../components/block';
import withRouter from '../hoc/withRouter';

import styles from './app.scss';

const iconStyles = {
    width: 50,
    height: 50,
};

const HomeIcon = props =>
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>;

class App extends Component {
    state = {
        isOpen: false,
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    render() {
        const { isHome, goHome } = this.props;
        return (
            <div className="app-container">
                <Container className={styles.height}>
                    <Row className={styles.height}>
                        <Col className={styles.pagesContainer} md="12">
                            <Block className={styles.navBar}>
                                <HomeIcon
                                    className={styles.homeLink}
                                    active={isHome()}
                                    onTouchTap={goHome}
                                    style={iconStyles}
                                    color={indigo900}
                                    hoverColor={indigo500}
                                />
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

const mapActions = {};

export default withRouter(connect(mapProps, mapActions)(App));
