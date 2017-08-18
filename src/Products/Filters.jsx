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

const FilterDropdown = Dropdown.extend`
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

const Hint = styled.div`
  display: inline;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  line-height: 1rem;
  color: #171717;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Right = styled.div`
  margin-left: 1rem;
  @media screen and (min-width: 48rem) {
    margin-left: 0;
  }
`;

export default function Filters() {
  return (
    <Container>
      <div>
        <Hint>Refine by</Hint>
        <FilterDropdown>Category</FilterDropdown>
        <FilterDropdown>Colour</FilterDropdown>
        <FilterDropdown>Size</FilterDropdown>
      </div>
      <Right>
        <FilterDropdown>Sort by price</FilterDropdown>
      </Right>
    </Container>
  );
}
