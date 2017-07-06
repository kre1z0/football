import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { theme } from './assets/theme';
import Routes from './routes';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/base/main.scss';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={theme}>
                    <Router>
                        <Switch>
                            <App>
                                {Routes}
                            </App>
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Root;
