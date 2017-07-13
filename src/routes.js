import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
import League from './containers/league';
import Team from './containers/team';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team/:teamId" component={Team} />
        <Route exact path="/league/:leagueId" component={League} />
        <Route path="*" component={Home}>
            <Redirect to="/" />
        </Route>
    </Switch>
);
