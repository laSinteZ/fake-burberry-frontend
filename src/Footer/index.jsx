import React from 'react';
import styled from 'styled-components';
import MobileHelp from './MobileHelp';
import Navigation from './Navigation';
import Selector from './Selector';

const Footer = styled.footer`
  padding: 2rem 0rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 62rem) {
    padding: 4rem 0 3rem 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 1rem;
  }
`;

const countries = ['United Kingdom', 'Russian Federation', 'Ukraine'];

const languages = ['English', 'Russian', 'Українська мова'];

export default function () {
  return (
    <Footer>
      <div className="container">
        <Navigation />
        <Controls>
          <Selector title="Shipping country" options={countries} />
          <Selector title="Language" options={languages} />
        </Controls>
        <MobileHelp />
      </div>
    </Footer>
  );
}
