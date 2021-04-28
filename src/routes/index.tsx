import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

function Routes(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/profile" component={ Profile } />
                    <Route exact path="/settings" component={ Settings } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;