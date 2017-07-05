import React, { Component } from 'react';
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
        const {
            isHome,
            goHome,
            isHeroes,
            goHeroes,
            isSorting,
            goSorting,
        } = this.props;
        return (
            <div className="app-container">
                <Container>
                    <Row>
                        <Col className="clearfix" lg="12">
                            <Navbar color="faded" light toggleable>
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink
                                                active={isHome()}
                                                onTouchTap={goHome}
                                            >
                                                goHome
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                active={isHeroes()}
                                                onTouchTap={goHeroes}
                                            >
                                                heroes
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                active={isSorting()}
                                                onTouchTap={goSorting}
                                            >
                                                sorting
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
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
