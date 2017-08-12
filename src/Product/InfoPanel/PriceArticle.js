import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import { ToLarge } from "../../common/Breakpoints";

const PriceArticle = styled.div`
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
  line-height: 1.167;
`;

export default function(props) {
  return (
    <PriceArticle>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency={props.currency}
          currencyDisplay="code"
          minimumFractionDigits={0}
        />
      </Price>
      <ToLarge>
        <ID>
          Item {props.id}
        </ID>
      </ToLarge>
    </PriceArticle>
  );
}
