import React from "react";
import styled from "styled-components";

const MobileHelp = styled.div`
  text-align: center;
  align-self: center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Subtitle = styled.h4`
  margin: 1.5rem 0rem 1rem 0rem;
  color: #171717;
  font-weight: bold;
  font-size: 16px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.2;
`;

const Link = styled.a`
  display: block;
  margin: 0;
  padding: 0;
  color: #171717;
  text-decoration: none;
  font-style: italic;
  font-size: 14px;
  font-family: Lora, serif;
  line-height: 1.22;
`;


export default function() {
  return (
    <MobileHelp>
      <Subtitle>Need help?</Subtitle>
      <Link>Find out more and contact us</Link>
    </MobileHelp>
  );
}
