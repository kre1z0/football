import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../api';

class Home extends Component {
    componentDidMount() {
        api
            .getAllTeam(445)
            .then(result => {
                console.log('result', result);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    render() {
        return <div className="lol">ghfghfghfghfghfghf</div>;
    }
}

const mapProps = () => ({});

const mapActions = {};

export default connect(mapProps, mapActions)(Home);
