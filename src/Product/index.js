import React from "react";
import styled from "styled-components";
import Showcase from "./Showcase";
import InfoPanel from "./InfoPanel/";
import Recommend from "./Recommend/";

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

export default function Product() {
  return (
    <main className="container">
      <Title>Long Cotton Gabardine Car Coat</Title>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Showcase />
        </div>
        <div className="col-xs-12 col-md-5">
          <InfoPanel />
        </div>
        <Recommend />
      </div>
    </main>
  );
}
