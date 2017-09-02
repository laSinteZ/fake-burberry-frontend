import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import Navigation from './Navigation';
import { Md } from '../common/Breakpoints';
import CountrySelector from './CountrySelector';

const Hamburger = styled.button`
  height: 1rem;
  width: 1rem;

  cursor: pointer;
  
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

const countries = ['United Kingdom (£)', 'Russian Federation (₽)', 'Ukraine (₴)'];

export default function Header(props) {
  return (
    <header className="container">
      <div className="row middle-xs">
        <div className="col-xs-2 col-md-4">
          <Hamburger onClick={props.handleHamburgerClick} />
          <Md>
            <CountrySelector countries={countries} />
          </Md>
        </div>
        <div className="col-xs-8 col-md-4">
          <Link to="/">
            <Logo alt="Burberry" src={logo} />
          </Link>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

Header.propTypes = {
  handleHamburgerClick: PropTypes.func.isRequired,
};
