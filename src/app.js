import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Header from './components/header';
import Nav from './components/navigation';
import Content from './components/content';
import { Route } from 'react-router-dom';

import {headerConnector, navConnector, contentConnector} from './connector';

const Navigation = navConnector(Nav);
const ContentPage = withRouter(contentConnector(Content));

const AppHeader = withRouter(headerConnector(Header));

class App extends Component {
    render() {
        return (
            <div className="container">
                <Route path="/:city/" render={ ({ match }) => (
                    <AppHeader matchParams={ match.params }/>
                )}/>
                <Navigation/>
                <ContentPage/>
            </div>
        );
    }
}

export default withRouter(App);
