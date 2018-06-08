import React from 'react';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import Nav from '../navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Full from '../pages/full';
import Short from '../pages/short';
import Today from '../pages/today';

const cityByDefault = 'kharkiv';

const Content = () => {
  return (
      <div>
          <Nav/>
          <Switch>
              <Route path="/:city/16days" component={ Full }/>
              <Route path="/:city/5days" component={ Short }/>
              <Route path="/:city/today" component={ Today }/>
              <Redirect to={`/${cityByDefault}/16days`}/>
          </Switch>
      </div>
  );
};

Content.propTypes = {};
Content.displayName = "Content";

export default Content;