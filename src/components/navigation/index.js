import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => {
  return (
      <div>
          <ul className="nav nav-tabs">
              <li className="nav-item">
                  <a className="nav-link active" href="#">16 days</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">5 days</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Today</a>
              </li>
          </ul>
      </div>
  );
};

Nav.propTypes = {};
Nav.displayName = "Navigation";

export default Nav;