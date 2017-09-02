import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  margin-right: -0.5rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
  }
`;

const Left = styled.div`display: flex;`;

const Right = styled.div`
  display: flex;

  margin-left: 1rem;
  padding-right: 0.5rem;

  @media screen and (min-width: 48rem) {
    margin-left: 0;
    padding-right: 0;
  }
`;

class Filters extends Component {
  state = {
    isOpened: false,
  };

  handleFilterToggle = () => {
    this.setState(
      prevState => ({ isOpened: !prevState.isOpened }),
      () => this.props.onToggle(this.state.isOpened),
    );
  };

  render() {
    return (
      <Container>
        <Left>
          <Filter
            title="Category"
            onToggle={this.handleFilterToggle}
            isSomeOpened={this.state.isOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Colour"
            onToggle={this.handleFilterToggle}
            isSomeOpened={this.state.isOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Size"
            onToggle={this.handleFilterToggle}
            isSomeOpened={this.state.isOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
        </Left>
        <Right>
          <Filter
            title="Sort by price"
            isAlignedRight
            onToggle={this.handleFilterToggle}
            isSomeOpened={this.state.isOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
        </Right>
      </Container>
    );
  }
}

Filters.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Filters;
