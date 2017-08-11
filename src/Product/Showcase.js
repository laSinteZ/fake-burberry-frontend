import React from "react";
import styled from "styled-components";

const Showcase = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 -0.5rem;
  white-space: nowrap;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Image = styled.img`
  height: 400px;
  object-fit: contain;

  @media screen and (min-width: 48rem) {
    height: 576px;
    object-fit: cover;
  }
`;

export default function() {
  return (
    <Showcase>
      <Image src="img/product-1.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/product-2.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/product-3.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/product-4.jpg" alt="Long Cotton Gabardine Car Coat" />
    </Showcase>
  );
}
