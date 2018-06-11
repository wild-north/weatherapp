import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SixteenDays from '../pages/sixteen-days';
import FiveDays from '../pages/five-days';
import CurrentDay from '../pages/current-day';
import { pageConnector } from '../../connector';

const Content = ({ selectedCity, selectedView, match, history }) => {
    return (
        <Switch>
            <Route path="/:city/16days" component={ pageConnector(SixteenDays) }/>
            <Route path="/:city/5days" component={ pageConnector(FiveDays) }/>
            <Route path="/:city/today" component={ pageConnector(CurrentDay) }/>
            <Redirect to={`/${selectedCity}/${selectedView}`}/>
        </Switch>
    );
};

Content.propTypes = {};
Content.displayName = "Content";

export default Content;