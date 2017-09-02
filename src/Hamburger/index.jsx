import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import ButtonSelector from './ButtonSelector';
import Subsection from './Subsection';
import arrow from '../assets/arrow.svg';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 274px;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Main = styled.div`
  transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  ${props =>
    props.isShifted &&
    css`
      transform: translate3d(-274px, 0, 0);
      height: 90%;
    `};
`;

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 1rem auto 0 auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-top: 3rem;
  }
`;

const Subtitle = styled.h3`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 14px;
  margin-bottom: 18px;
  color: 171717;
`;

const Link = styled.a`
  display: block;
  color: #171717;
  text-decoration: none;
  font-size: 14px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlockSubsection = styled.div`padding: 2.25rem 0.5rem;`;

const ButtonSubsection = styled.button`
  display: block;
  text-decoration: none;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.875rem;
  text-align: left;
  border: none;
  background: transparent;
  color: #171717;
  line-height: 1rem;
  cursor: pointer;
  width: 100%;

  padding: 0.625rem 0;
  margin: 0;
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  :: after {
    position: absolute;
    right: 3px;
    width: 12px;
    height: 16px;
    content: '';
    transform: rotate(-90deg);
    background: url(${arrow}) no-repeat;
    background-size: contain;
    background-position: 0 3px;
  }
`;

const countries = ['United Kingdom (£)', 'Russian Federation (₽)', 'Ukraine (₴)'];

const languages = ['English', 'Russian', 'Українська мова'];

const subsections = [
  {
    title: 'Men',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Women',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/4234f8a6cd1084d7710a3e40d0b0752d9674e798.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/women/new-arrivals' },
      { title: 'Clothing', url: '/women/clothing' },
      { title: 'Scarves', url: '/women/scarves' },
      { title: 'Bags', url: '/women/bags' },
      { title: 'Accessories', url: '/women/accessories' },
      { title: 'Shoes', url: '/women/shoes' },
      { title: 'Make-up', url: '/women/make-up' },
      { title: 'Fragnance', url: '/women/fragnance' },
      { title: 'Gifts', url: '/women/gifts' },
      { title: 'Runway', url: '/women/runway' },
    ],
  },
  {
    title: 'Children',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/cf6e1b1b9d32f13a7b684b141dbdf26bd842020b.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New In', url: '/children/new-in' },
      { title: 'Baby', url: '/children/baby' },
      { title: 'Girl 4-11 Yrs', url: '/children/girl-4-11-yrs' },
      { title: 'Boy 4-11 Yrs', url: '/children/boy-4-11-yrs' },
      { title: 'Accessories', url: '/children/Accessories' },
      { title: 'Gifts', url: '/children/gifts' },
    ],
  },
  {
    title: 'Beauty',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/dcdefeb4e3c9da75bda644c8b8873cc22da50449.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'Make-up', url: '/beauty/make-up' },
      { title: 'Women′s Fragrance', url: '/women/fragnance' },
      { title: 'Men′s Fragrance', url: '/men/fragnance' },
      { title: 'Beauty Gifts', url: '/beauty/beauty-gifts' },
    ],
  },
];

class Hamburger extends Component {
  state = {
    isSubsectionOpened: false,
    subsectionNumber: 0,
  };

  toggleSubsection = (index) => {
    this.setState(prevState => ({
      isSubsectionOpened: !prevState.isSubsectionOpened,
      subsectionNumber: index,
    }));
  };

  closeSubsection = () => this.setState({ isSubsectionOpened: false });

  render() {
    return (
      <Wrapper>
        <Main isShifted={this.state.isSubsectionOpened}>
          <Logo alt="Burberry" src={logo} />
          <BlockSubsection>
            {subsections.map((subsection, index) => (
              <ButtonSubsection
                onClick={() => this.toggleSubsection(index)}
                key={subsection.title}
              >
                {subsection.title}
              </ButtonSubsection>
            ))}
          </BlockSubsection>
          <Block>
            <Subtitle>Customer Service</Subtitle>
            <nav>
              <Link href="#">Contact Us</Link>
              <Link href="#">Payment</Link>
              <Link href="#">Shipping</Link>
              <Link href="#">Returns</Link>
              <Link href="#">Faqs</Link>
              <Link href="#">The Burberry App</Link>
              <Link href="#">Store Locator</Link>
            </nav>
          </Block>
          <Block>
            <Subtitle>Our Company</Subtitle>
            <nav>
              <Link href="#">Our History</Link>
              <Link href="#">Burberry Group Pic</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Corporate Responsibility</Link>
              <Link href="#">Site Map</Link>
            </nav>
          </Block>
          <Block>
            <ButtonSelector options={countries} />
            <ButtonSelector options={languages} />
          </Block>
        </Main>
        <Subsection
          content={subsections[this.state.subsectionNumber]}
          isOpened={this.state.isSubsectionOpened}
          close={this.closeSubsection}
          toggleHamburger={this.props.handleHamburgerClick}
        />
      </Wrapper>
    );
  }
}

Hamburger.propTypes = {
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default Hamburger;
