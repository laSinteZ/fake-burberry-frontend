import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  font-size: 0;

  margin-right: 1rem;

  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};

  @media screen and (min-width: 62rem) {
    margin-bottom: 1.5rem;
  }
`;

export default function ButtonColour(props) {
  return (
    <Button value={props.value} type="button" active={props.isActive}>
      {`${props.colourName} colour`}
    </Button>
  );
}

ButtonColour.propTypes = {
  value: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  colourName: PropTypes.string.isRequired,
};

ButtonColour.defaultProps = {
  isActive: false,
};
