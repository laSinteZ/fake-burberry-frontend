import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

export const Md = ({ children }) =>
  (<Responsive minWidth="48rem">
    {children}
  </Responsive>);

export const Lg = ({ children }) =>
  (<Responsive minWidth="62rem">
    {children}
  </Responsive>);

export const ToMd = ({ children }) =>
  (<Responsive maxWidth={992 - 1}>
    {children}
  </Responsive>);

Md.propTypes = {
  children: PropTypes.node.isRequired,
};

Lg.propTypes = {
  children: PropTypes.node.isRequired,
};

ToMd.propTypes = {
  children: PropTypes.node.isRequired,
};
