import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from '../common/Dropdown';

const Country = styled.select`
  position: absolute;
  cursor: pointer;
  color: transparent;

  opacity: 0;

  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
`;

class ContrySelector extends Component {
  state = {
    selectedCountry: 0,
  };

  handleSelectCountry = (event) => {
    this.setState({ selectedCountry: event.target.selectedIndex });
  };

  render() {
    return (
      <div>
        <Country onChange={this.handleSelectCountry}>
          {this.props.countries.map(country => (
            <option key={country}>
              Shopping in: {country}
            </option>
          ))}
        </Country>
        <Dropdown type="button">Shopping in: {this.props.countries[this.state.selectedCountry]}</Dropdown>
      </div>
    );
  }
}

ContrySelector.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContrySelector;
