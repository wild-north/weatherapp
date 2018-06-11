import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {cities} from '../../../config';

class SixteenDays extends Component {

    constructor() {
        super();
        this.state = { city: {} };
    }

    componentWillMount() {
        const city = cities.find(city => city.value === this.props.selectedCity);
        this.setState({
            city
        });
        // console.log('Место для запроса');
    }
    render() {
        return (
            <div>
                <h2>{ this.state.city.label } - Погода за 16 дней</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus deserunt eius esse facilis fugiat, id ipsa ipsam labore molestiae odio praesentium, quaerat quam quidem quod, saepe tempore ullam ut.</p>
            </div>
        );
    }
};

SixteenDays.propTypes = {};
SixteenDays.displayName = "SixteenDays";

export default SixteenDays;