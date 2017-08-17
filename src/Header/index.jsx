import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import Navigation from './Navigation';
import Dropdown from '../common/Dropdown';
import { Md } from '../common/Breakpoints';

const Hamburger = styled.button`
  height: 1rem;
  width: 1rem;

  background: url(${hamburger}) no-repeat;
  background-position: center;   

  border: none;
  
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 18px auto;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem auto;
    height: 1rem;
  }

  @media screen and (min-width: 62rem) {
    margin: 2rem auto;
  }
`;

export default function Header() {
  return (
    <header className="container">
      <div className="row middle-xs">
        <div className="col-xs-2 col-md-4">
          <Hamburger />
          <Md>
            <Dropdown>Shopping in: United Kingdom (£)</Dropdown>
          </Md>
        </div>
        <div className="col-xs-8 col-md-4">
          <a href="/">
            <Logo alt="Burberry" src={logo} />
          </a>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
