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
    isAnyOpened: false,
  };

  handleFilterToggle = (toggledOn) => {
    this.setState({ isAnyOpened: toggledOn });
    this.props.onToggle(toggledOn);
  };

  render() {
    return (
      <Container>
        <Left>
          <Filter
            title="Category"
            key="category"
            onToggle={toggledOn => this.handleFilterToggle(toggledOn)}
            isAnyOpened={this.state.isAnyOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Colour"
            key="colour"
            onToggle={toggledOn => this.handleFilterToggle(toggledOn)}
            isAnyOpened={this.state.isAnyOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Size"
            key="size"
            onToggle={toggledOn => this.handleFilterToggle(toggledOn)}
            isAnyOpened={this.state.isAnyOpened}
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
        </Left>
        <Right>
          <Filter
            title="Sort by price"
            key="sort-price"
            isAlignedRight
            onToggle={toggledOn => this.handleFilterToggle(toggledOn)}
            isAnyOpened={this.state.isAnyOpened}
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
