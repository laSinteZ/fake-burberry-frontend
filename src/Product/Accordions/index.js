import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Shipping from "./Shipping";

const DividerMobile = styled.hr`
  margin: 0 -0.5rem;
  border: none;
  border-top: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function Accordions() {
  return (
    <div>
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
      <DividerMobile />
      <Shipping title="Delivery">
        <h4>Free Next Day Delivery</h4>
        <p>Order before 7pm Monday to Thursday for delivery the next day</p>
        <h4>Collect-in-Store</h4>
        <p>
          Order online today and pick up your items in store as early as
          tomorrow
        </p>
        <h4>Free Returns</h4>
        <p>Enjoy free returns on your order</p>
        <h4>Free Gift Packaging</h4>
        <p>
          Discover our gift packaging, a gold lined box tied with a coloured
          ribbon
        </p>
      </Shipping>
      <DividerMobile />
    </div>
  );
}
