import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

export const Lg = ({ children }) =>
  (<Responsive minWidth="62rem">
    {children}
  </Responsive>);

export const ToMd = ({ children }) =>
  (<Responsive maxWidth={992 - 1}>
    {children}
  </Responsive>);

Lg.propTypes = {
  children: PropTypes.node.isRequired,
};

ToMd.propTypes = {
  children: PropTypes.node.isRequired,
};
