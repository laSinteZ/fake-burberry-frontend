import React from "react";
import styled from "styled-components";
import Showcase from "./Showcase";
import Gallery from "./Gallery";
import InfoPanel from "./InfoPanel/";
import Recommend from "./Recommend/";
import Description from "./Accordions/Description";
import Shipping from "./Accordions/Shipping";
import { Medium, Large } from "../common/responsive";

const Title = styled.h1`
  padding: 1rem 0.5rem;
  color: #111111;
  font-weight: normal;
  font-size: 20px;
  font-family: Lora, serif;
  line-height: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media screen and (min-width: 62rem) {
    padding: 0;
    margin-bottom: 0.5rem;
  }
`;

const DividerMobile = styled.hr`
margin: 0 -0.5rem;
border: none;
border-top: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Background = styled.div`
  background: #d4bdad;
  margin-bottom: 4rem;
`;

const PrimaryImage = styled.img`
  display: block;
  width: 100%;
`;

const InfoPanelWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
`;

export default function Product(props) {
  return (
    <main>        
      <Medium>
        <div className="container">
            <Title>{props.title}</Title>
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <Showcase images={props.images}/>
            </div>
            <div className="col-xs-12 col-md-5">
              <InfoPanel />
            </div>
          </div>
        </div>
      </Medium>
      <Large>
        <Background>
          <div className="container">
            <div className="row">
              <InfoPanelWrapper>
                <div className="col-lg-6">
                  <PrimaryImage src={props.images[0].src} alt={props.images[0].alt}/>
                </div>
                <div className="col-lg-6">
                  <Title>{props.title}</Title>
                  <InfoPanel />
                </div>
              </InfoPanelWrapper>
            </div>
          </div>
        </Background>
      </Large>
      <div className="container">
        <DividerMobile />
        <Description title="Description">
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
            woven and breathable fabric that protects against wind and rain.
          </p>
          <p>
            Raglan sleeves and a concealed button closure complement the clean
            tailored lines.
          </p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as
              proportions change slightly according to size.
            </li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </Description>
        <Large>
          <Gallery images={props.images}/>
        </Large>
        <DividerMobile />
        <Shipping title="Delivery" />
        <DividerMobile />
        <Recommend />
      </div>
    </main>
  );
}
