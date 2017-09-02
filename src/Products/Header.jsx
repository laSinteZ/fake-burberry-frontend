import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filters from './Filters';

const Background = styled.div`
  background-color: #f3f3f3;

  padding-top: 2rem;
  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  font-family: Lora, serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 2rem;
  color: #171717;
`;

const Text = styled.p`
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  line-height: 1.25rem;
  text-align: left;
  color: #171717;
  margin: 1rem 0 0.5rem 0;
  @media screen and (min-width: 48rem) {
    margin: 1rem 0;
  }
`;

const Link = styled.a`
  display: inline-block;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  color: #171717;
  text-decoration: none;
  border-bottom: solid 1px #171717;
`;

const Boldish = styled.span`
  font-weight: 500;
`;
export default function Header(props) {
  return (
    <Background>
      <div className="container">
        <Title>Men’s Clothing</Title>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-7">
            <Text>
              Explore our menswear collection for the season. Sculptural knitwear,{' '}
              <Link>sweatshirts</Link>, artist overalls and oversized cabans feature alongside our
              signature trench coat in both heritage. <Link><Boldish>More</Boldish></Link>
            </Text>
          </div>
        </div>
        <Filters onToggle={props.toggleOverlay} />
      </div>
    </Background>
  );
}

Header.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
};
