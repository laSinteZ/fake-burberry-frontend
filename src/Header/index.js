import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;
  justify-content: center;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 62rem) {
    padding: 2rem 0;
    border-bottom: none;    
  }
`;

const Logo = styled.img`
  display: block;
  @media screen and (min-width: 62rem) {
    height: 1rem;    
  }
`;

export default function() {
  return (
    <Header>
      <a href="#">
        <Logo alt="Burberry" src={logo} />
      </a>
    </Header>
  );
}
