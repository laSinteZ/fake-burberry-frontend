/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import { ToMd } from '../../common/Breakpoints';

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  padding: 0;
  color: #171717;
  font-weight: normal;
  font-size: 16px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.1875;
`;

const ID = styled.p`
  margin: 0;
  padding: 0;
  color: #171717;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.34;
`;

export default function PriceArticle(props) {
  return (
    <Wrapper>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="symbol"
          minimumFractionDigits={0}
        />
      </Price>
      <ToMd>
        <ID>
          Item {props.id}
        </ID>
      </ToMd>
    </Wrapper>
  );
}

PriceArticle.propTypes = {
  id: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
