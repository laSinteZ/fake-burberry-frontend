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

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  padding: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.34;
  letter-spacing: 1.5px;
  color: #999999;

  text-transform: uppercase;
  text-decoration: none;

  &.${activeClassName} {
    color: #171717;
    border-bottom: 1px solid #171717;  
  }
`;

export default function () {
  return (
    <Navigation>
      <NavItem to="/women">Women</NavItem>
      <NavItem to="/men">Men</NavItem>
      <NavItem to="/children">Children</NavItem>
      <NavItem to="/beauty">Beauty</NavItem>
      <NavItem to="/experience">Experience</NavItem>
    </Navigation>
  );
}
