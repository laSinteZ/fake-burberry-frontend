import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Country = styled.select`
  height: 1rem;
  position: relative;
  display: block;
  margin-bottom: -1rem;
  cursor: pointer;
  color: Transparent;
  width: 100%;
    
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
`;

const TextOnlyButton = styled.button`
  padding: 0;
  border: none;
  background-color: #f3f3f3;
  color: #999999;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  cursor: pointer;
`;

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }

  @media screen and (min-width: 48rem) {
    & + & {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }

  @media screen and (min-width: 62rem) {
    & + & {
      margin-top: 0;
      margin-left: 3rem;
    }
  }
`;

const DarkText = styled.span`color: #171717;`;

class Selector extends Component {
  state = {
    selectedOption: 0,
  };

  handleSelect = (event) => {
    this.setState({ selectedOption: event.target.selectedIndex });
  };

  render() {
    return (
      <Wrapper>
        <Country onChange={this.handleSelect}>
          {this.props.options.map(option => (
            <option key={option}>
              {this.props.title}: {option}
            </option>
          ))}
        </Country>
        <TextOnlyButton type="button">
          {this.props.title}: <DarkText>{this.props.options[this.state.selectedOption]}</DarkText>
        </TextOnlyButton>
      </Wrapper>
    );
  }
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Selector;
