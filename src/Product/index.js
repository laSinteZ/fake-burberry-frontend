import React from "react";
import styled from "styled-components";
import Showcase from "./Showcase";
import Gallery from "./Gallery";
import InfoPanel from "./InfoPanel/";
import Recommend from "./Recommend/";
import Description from "./Accordions/Description";
import Shipping from "./Accordions/Shipping";
import {MobileTablet, Desktop} from "../common/responsive";

const Title = styled.h1`
  padding: 1rem 0.5rem;
  color: #171717;
  font-weight: normal;
  font-size: 20px;
  font-family: Lora, serif;
  line-height: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
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

let productTitle = "Long Cotton Gabardine Car Coat"
let productImages = [{src: "img/product-1.jpg", alt: "Long Cotton Gabardine Car Coat"}, {src: "img/product-2.jpg", alt: "Long Cotton Gabardine Car Coat"}, {src: "img/product-3.jpg", alt: "Long Cotton Gabardine Car Coat"}, {src: "img/product-4.jpg", alt: "Long Cotton Gabardine Car Coat"}];

export default function Product() {
  return (
    <main className="container">
      <MobileTablet>
        <Title>{productTitle}</Title>
      </MobileTablet>
      <div className="row">
        <div className="col-xs-12 col-md-7 col-lg-6">
          <Showcase images={productImages}/>
        </div>
        <div className="col-xs-12 col-md-5 col-lg-6">
          <InfoPanel />
        </div>
      </div>
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
      <Desktop>
        <Gallery images={productImages}/>
      </Desktop>
      <DividerMobile />
      <Shipping title="Delivery" />
      <DividerMobile />
      <Recommend />
    </main>
  );
}
