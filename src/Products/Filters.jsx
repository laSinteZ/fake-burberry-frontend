import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from '../common/Dropdown';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  white-space: nowrap;
  margin-right: -0.5rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
  }
`;

const Filter = Dropdown.extend`
  color: #171717;
  font-weight: normal;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  & + & {
    margin-left: 1rem;
  }
  @media screen and (min-width: 48rem) {
    & + & {
      margin-left: 3rem;
    }
  }
`;

const Right = styled.div`
  margin-left: 1rem;
  padding-right: 0.5rem;

  @media screen and (min-width: 48rem) {
    margin-left: 0;
    padding-right: 0;
  }
`;

export default function Filters() {
  return (
    <Container>
      <div>
        <Filter>Category</Filter>
        <Filter>Colour</Filter>
        <Filter>Size</Filter>
      </div>
      <Right>
        <Filter>Sort by price</Filter>
      </Right>
    </Container>
  );
}
