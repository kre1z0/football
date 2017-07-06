import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
import Teams from './containers/teams';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams/:id" component={Teams} />
        <Route path="*" component={Home}>
            <Redirect to="/" />
        </Route>
    </Switch>
);
