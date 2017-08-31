import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Size = Button.extend`
  width: auto;
  padding: 0.5rem 1rem;

  margin-right: 0.5rem;
  margin-bottom: 2rem;
  ${props =>
    props.isActive &&
    `
    font-weight: bold;
  `};
`;


export default function ButtonSize(props) {
  return (
    <Size value={props.value} type="button" isActive={props.isActive} onClick={props.onClick}>
      {`${props.value}`}
    </Size>
  );
}

ButtonSize.propTypes = {
  value: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

ButtonSize.defaultProps = {
  isActive: false,
};
