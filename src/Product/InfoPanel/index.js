import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ButtonColour from "./ButtonColour";
import ButtonTextOnly from "./ButtonTextOnly";
import Price from "./Price";

const Divider = styled.hr`
  margin: 0 0.5rem;
  border: none;
  border-top: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  padding: 2rem 0.5rem 3rem 0.5rem;
  flex-flow: column;

  @media screen and (min-width: 48rem) {
    padding: 0;
    padding-top: 2rem;
  }
`;

const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  color: #171717;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.34;
`;

const InfoContainer = styled.div`
  padding: 1rem 0.5rem 2rem 0.5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  margin-top: 1rem;
  white-space: nowrap;
`;

export default function() {
  return (
    <section>
      <InfoContainer>
        <Price id="39428531" price={110000} currency = "RUB" />
        <Colour>Colour: Honey</Colour>
        <InfoBottom>
          <ButtonColour value="#232122" colourName="Black" />
          <ButtonColour value="#cfa880" colourName="Honey" isActive="true" />
        </InfoBottom>
      </InfoContainer>
      <Divider />
      <Controls>
        <Button primary type="button">
          Select a size
        </Button>
        <Button type="button">Find in store</Button>
        <ButtonTextOnly type="button">Need size help?</ButtonTextOnly>
      </Controls>
    </section>
  );
}
