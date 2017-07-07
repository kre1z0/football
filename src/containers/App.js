import React, { Component } from 'react';
import { indigo900, indigo500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import withRouter from '../hoc/withRouter';

import styles from './app.scss';

const iconStyles = {
    width: 50,
    height: 50,
    marginRight: 10,
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
                <Container>
                    <Row>
                        <Col md="12">
                            <Navbar
                                className={styles.navBar}
                                color="faded"
                                light
                                toggleable
                            >
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink
                                                className={styles.homeLink}
                                                active={isHome()}
                                                onTouchTap={goHome}
                                            >
                                                <HomeIcon
                                                    style={iconStyles}
                                                    color={indigo900}
                                                    hoverColor={indigo500}
                                                />
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
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
