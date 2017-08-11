import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Card = styled.a`
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
  color: #111111;
  font-weight: normal;
  font-size: 16px;
  font-family: Lora, serif;
  line-height: 1.2;
`;

const Price = styled.h5`
  color: #999999;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.17;
`;

export default function(props) {
  return (
    <Card href="#">
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
    </Card>
  );
}
