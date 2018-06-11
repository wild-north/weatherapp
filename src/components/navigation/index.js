import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ selectedCity, onSelectView }) => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink to={ `/${selectedCity}/16days` }>
                        <button className="btn btn-info"
                                onClick={ () => onSelectView('16days') }
                        >16 days</button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={ `/${selectedCity}/5days` } className="nav-item">
                        <button className="btn btn-info"
                                onClick={ () => onSelectView('5days') }
                        >5 days</button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={ `/${selectedCity}/today` } className="nav-item">
                        <button className="btn btn-info"
                                onClick={ () => onSelectView('today') }>Today</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

Nav.propTypes = {};
Nav.displayName = "Navigation";

export default Nav;