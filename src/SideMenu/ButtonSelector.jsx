import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`

  height: 3rem;
  padding: 0.875rem;
  font-size: 0.75rem;
  line-height: 1.34;
  opacity: 0;
    
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  cursor: pointer;  
`;

const Button = styled.button`
  position: absolute;
  padding: 1rem 0;
  border: none;
  background-color: transparent;
  left: 0;
  width: 100%;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-align: center;
  border: 1px solid #171717;
  border-radius: 2px;  
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  &:last-child{
    margin-bottom: 0;
  }
`;

class ButtonSelector extends Component {
  state = {
    selectedOption: 0,
  };

  handleSelect = (event) => {
    this.setState({ selectedOption: event.target.selectedIndex });
  };

  render() {
    return (
      <Wrapper>
        <Button type="button">
          {this.props.options[this.state.selectedOption]}
        </Button>
        <Select onChange={this.handleSelect}>
          {this.props.options.map(option => (
            <option key={option}>
              {option}
            </option>
          ))}
        </Select>
      </Wrapper>
    );
  }
}

ButtonSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonSelector;
