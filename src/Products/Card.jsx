/* eslint react/style-prop-object: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import heart from '../assets/heart.svg';

const Wrapper = styled(Link)`
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
  margin-bottom: 0.5rem;
  color: #171717;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  font-weight: 600;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  @media screen and (min-width: 62rem) {
    font-size: 1rem;
  }
`;

const Price = styled.h5`
  color: #171717;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;

  @media screen and (min-width: 62rem) {
    font-size: 12px;
    line-height: 1rem;
    color: #171717;
  }
`;

const Colours = styled.h5`
  display: inline-block;
  font-weight: normal;
  line-height: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  text-align: left;
  color: #171717;
  margin-bottom: 4px;
`;

const ColoursNumber = styled.span`border-bottom: 1px solid black;`;

const Promo = styled.div`
  margin: 1rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PromoLabel = styled.p`
  line-height: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  color: #171717;
  margin: 0;
`;

const Like = styled.button`
  display: inline-block;
  content: '';
  height: 1rem;
  width: 14px;
  border: none;

  background: url(${heart}) no-repeat;
  background-position: center;

  border: none;
`;

export default function Card(props) {
  return (
    <Wrapper to="/product">
      <Image alt={props.title} src={props.image} />
      <Promo>
        <PromoLabel>
          {props.promoLabel}
        </PromoLabel>
        <Like />
      </Promo>
      <Title>
        {props.title}
      </Title>
      <Colours>
        Available in&nbsp;
        <ColoursNumber>
          <FormattedMessage
            id="colour"
            defaultMessage={`{colourNumber, number} {colourNumber, plural,
              one {colour}
              other {colours}
            }`}
            values={{
              colourNumber: props.colours,
            }}
          />
        </ColoursNumber>
      </Colours>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="symbol"
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
  colours: PropTypes.number.isRequired,
  promoLabel: PropTypes.string.isRequired,
};
