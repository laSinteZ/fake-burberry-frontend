import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ButtonColour from "./ButtonColour";
import ButtonTextOnly from "./ButtonTextOnly";
import ButtonSize from "./ButtonSize";
import PriceArticle from "./PriceArticle";
import { Md, LgOnly } from "../../common/Breakpoints";

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
  color: #171717;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.34;
`;

const Size = Colour;

const SizeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  padding: 1rem 0.5rem 2rem 0.5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  white-space: nowrap;
`;

const Subtitle = styled.h4`
  margin-bottom: 4px;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.167;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.35;
`;

export default function() {
  return (
    <section>
      <Md>
        <InfoContainer>
          <PriceArticle id="39428531" price={110000} currency="RUB" />
          <Colour>
            Colour: <b>Honey</b>
          </Colour>
          <ButtonContainer>
            <ButtonColour value="#232122" colourName="Black" />
            <ButtonColour value="#cfa880" colourName="Honey" isActive />
          </ButtonContainer>
        </InfoContainer>
        <Divider />
        <Controls>
          <Button primary type="button">
            Select a size
          </Button>
          <Button type="button">Find in store</Button>
          <ButtonTextOnly type="button">Need size help?</ButtonTextOnly>
        </Controls>
      </Md>

      <LgOnly>
        <div className="row">
          <div className="col-lg-12">
            <PriceArticle id="39428531" price={110000} currency="RUB" />
          </div>
          <div className="col-lg-6">
            <Colour>
              Colour: <b>Honey</b>
            </Colour>
            <ButtonContainer>
              <ButtonColour value="#232122" colourName="Black" />
              <ButtonColour value="#cfa880" colourName="Honey" isActive />
            </ButtonContainer>
            <Button primary type="button">
              Add to bag
            </Button>
          </div>
          <div className="col-lg-6">
            <SizeWrapper>
              <Size>
                Size: <b>XL</b>
              </Size>
              <ButtonTextOnly type="button">NEED SIZE HELP?</ButtonTextOnly>
            </SizeWrapper>
            <ButtonContainer>
              <ButtonSize type="button">S</ButtonSize>
              <ButtonSize type="button">M</ButtonSize>
              <ButtonSize type="button">L</ButtonSize>
              <ButtonSize type="button" isActive>
                XL
              </ButtonSize>
            </ButtonContainer>
            <Button type="button">Find in store</Button>
          </div>
          <div className="col-lg-12">
            <Subtitle>Free Next Day Delivery</Subtitle>
            <Paragraph>
              Order before 7pm Monday to Thursday for delivery the next day
            </Paragraph>
          </div>
        </div>
      </LgOnly>
    </section>
  );
}
