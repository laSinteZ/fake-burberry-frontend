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

export default function(props) {
  return (
    <Showcase>
      <Image src={props.images[0].src} alt={props.images[0].alt} />
      <Image src={props.images[1].src} alt={props.images[1].alt} />
      <Image src={props.images[2].src} alt={props.images[2].alt} />
      <Image src={props.images[3].src} alt={props.images[3].alt} />
    </Showcase>
  );
}
