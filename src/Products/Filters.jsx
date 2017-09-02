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
    activeFilterName: undefined,
  };

  handleFilterToggle = (filterName, toggledOn) => {
    if (toggledOn) {
      this.setState({ activeFilterName: filterName });
    } else {
      this.setState({ activeFilterName: undefined });
    }
    this.props.onToggle(toggledOn);
  };

  render() {
    return (
      <Container>
        <Left>
          <Filter
            title="Category"
            onToggle={toggledOn => this.handleFilterToggle('Category', toggledOn)}
            isOtherOpened={
              this.state.activeFilterName !== undefined && this.state.activeFilterName !== 'Category'
            }
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Colour"
            onToggle={toggledOn => this.handleFilterToggle('Colour', toggledOn)}
            isOtherOpened={
              this.state.activeFilterName !== undefined && this.state.activeFilterName !== 'Colour'
            }
          >
            Fun<br />
            Funfunfunfunfunfunfunfunfunfunf<br />
            Funfun<br />
          </Filter>
          <Filter
            title="Size"
            onToggle={toggledOn => this.handleFilterToggle('Size', toggledOn)}
            isOtherOpened={
              this.state.activeFilterName !== undefined && this.state.activeFilterName !== 'Size'
            }
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
            onToggle={toggledOn => this.handleFilterToggle('Sory by price', toggledOn)}
            isOtherOpened={
              this.state.activeFilterName !== undefined && this.state.activeFilterName !== 'Sort by price'
            }
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
