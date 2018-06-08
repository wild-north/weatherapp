import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Header = () => {
  return (
      <header>
          <p>Select your city</p>
          <Select
              name="city-name"
              value="kharkiv"
              onChange={() => {}}
              options={[
                  { value: 'kharkiv', label: 'Харьков' },
                  { value: 'kyiv', label: 'Киев' },
                  { value: 'london', label: 'Лондон' },
                  { value: 'odessa', label: 'Одесса' }
              ]}
          />
      </header>
  );
};

Header.propTypes = {};
Header.displayName = "Header";

export default Header;