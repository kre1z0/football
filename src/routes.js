import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
import Teams from './containers/teams';
import League from './containers/league';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams/:id" component={Teams} />
        <Route exact path="/league/:leagueId" component={League} />
        <Route path="*" component={Home}>
            <Redirect to="/" />
        </Route>
    </Switch>
);
