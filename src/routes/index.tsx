import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import PetRegister from '../pages/PetRegister';

function Routes(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/main" component={ Main } />
                    <Route exact path="/profile" component={ Profile } />
                    <Route exact path="/petRegister" component={ PetRegister } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;