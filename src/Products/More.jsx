import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 5rem;

  @media screen and (min-width: 48rem) {
    padding-top: 1rem;
  }
`;

const Button = styled.button`
  border: solid 1px #171717;
  border-radius: 2px;
  background-color: Transparent;
  padding: 1rem 2rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  line-height: 14px;
  color: #171717;
`;

const Title = styled.h2`
  font-weight: normal;
  line-height: 19px;
  font-family: Lora, serif;
  font-size: 1rem;
  color: #171717;
  margin-bottom: 1rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    line-height: 1.5rem;
    font-size: 1.25rem;
  }
`;

export default function More() {
  return (
    <Wrapper>
      <Title>Showing 8 of 17</Title>
      <Button type="button">View 9 more</Button>
    </Wrapper>
  );
}
