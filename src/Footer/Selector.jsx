import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Country = styled.select`

  cursor: pointer;
  color: transparent;
  width: 100%;

  opacity: 0;
  border: none;
  
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
`;

const TextOnlyButton = styled.button`
  position: absolute;
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
  margin-bottom: 1rem;

  &:last-child{
    margin-right: 0;
    margin-bottom: 0;    
  }

  @media screen and (min-width: 48rem) {
    margin-right: 1.5rem;
    margin-bottom: 0rem;    
  }

  @media screen and (min-width: 62rem) {
    margin-right: 3rem;
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
        <TextOnlyButton type="button">
          {this.props.title}: <DarkText>{this.props.options[this.state.selectedOption]}</DarkText>
        </TextOnlyButton>
        <Country onChange={this.handleSelect}>
          {this.props.options.map(option => (
            <option key={option}>
              {this.props.title}: {option}
            </option>
          ))}
        </Country>
      </Wrapper>
    );
  }
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Selector;
