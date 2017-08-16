/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Wrapper = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  margin: 0;
  width: 100%;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  color: #171717;
  font-weight: normal;
  font-size: 16px;
  font-family: Lora, serif;
  line-height: 1.2;

  @media screen and (min-width: 62rem) {
    font-size: 12px;
    line-height: 1.25rem;
    margin-top: 1rem;
    font-weight: 600;
  }
`;

const Price = styled.h5`
  color: #999999;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.17;

  @media screen and (min-width: 62rem) {
    font-size: 12px;
    line-height: 1rem;
    color: #171717;
  }
`;

export default function Card(props) {
  return (
    <Wrapper href="/">
      <Image alt={props.title} src={props.image} />
      <Title>
        {props.title}
      </Title>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits={0}
        />
      </Price>
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
