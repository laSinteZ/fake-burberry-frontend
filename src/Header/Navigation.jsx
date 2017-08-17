import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;

const Link = styled.a`
  padding: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.34;
  letter-spacing: 1.5px;
  color: #999999;

  text-transform: uppercase;
  text-decoration: none;

  ${props => props.isActive && `
    color: #171717;
    border-bottom: 1px solid #171717;
  `};
`;

export default function () {
  return (
    <Navigation>
      <Link href="#">Women</Link>
      <Link isActive>Men</Link>
      <Link href="#">Children</Link>
      <Link href="#">Beauty</Link>
      <Link href="#">Experience</Link>
    </Navigation>
  );
}
