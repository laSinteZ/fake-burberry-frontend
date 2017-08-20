import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;

const Link = styled(NavLink)`
  padding: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.34;
  letter-spacing: 1.5px;
  color: #999999;

  text-transform: uppercase;
  text-decoration: none;

  &.active {
    color: #171717;
    border-bottom: 1px solid #171717;  
  }
`;

export default function () {
  return (
    <Navigation>
      <Link to="/women">Women</Link>
      <Link to="/men">Men</Link>
      <Link to="/children">Children</Link>
      <Link to="/beauty">Beauty</Link>
      <Link to="/experience">Experience</Link>
    </Navigation>
  );
}
