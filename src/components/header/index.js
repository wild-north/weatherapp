import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { cities, defaultCity } from '../../config';

class Header extends Component {
    onChange = (selectedElement) => {
        const value = selectedElement && selectedElement.value;

        this.props.onSelectCity(value);
        this.props.history.push(`/${value}/${this.props.selectedView}`);
    };

    componentWillMount() {
        const cityNames = cities.map(city => city.value);
        const cityFromUrl = this.props.matchParams.city;
        let chosenName = cityFromUrl;

        if (!cityNames.includes(cityFromUrl)) {
            chosenName = defaultCity;
        }

        this.onChange({ value: chosenName });
    }

    render() {
        const { onSelectCity, history, selectedCity, selectedView } = this.props;

        return (
            <header>
                <Select
                    name="city-name"
                    value={ selectedCity }
                    onChange={ this.onChange }
                    options={cities}
                />
            </header>
        );
    }
}

Header.propTypes = {};
Header.displayName = "Header";

export default Header;