import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Price = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const PriceNumber = styled.h2`
  margin: 0;
  padding: 0;
  color: #111111;
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
  line-height: 1.167;
`;

export default function(props) {
  return (
    <Price>
      <PriceNumber>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits={0}
        />
      </PriceNumber>
      <ID>
        Item {props.id}
      </ID>
    </Price>
  );
}