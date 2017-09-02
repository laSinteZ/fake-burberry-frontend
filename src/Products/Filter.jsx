import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Dropdown from '../common/Dropdown';

const Button = Dropdown.extend`
  color: #171717;
  font-weight: normal;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  ${props => props.isSomeOpened && !props.isOpened && css`opacity: 0.5;`};
`;

const Wrapper = styled.div`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 48rem) {
    position: relative;
    margin-right: 3rem;
  }
`;

const Content = styled.div`
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  z-index: 1;
  background: #f3f3f3;
  position: absolute;
  display: block;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  line-height: 1rem;

  right: -0.5rem;
  left: -0.5rem;

  @media screen and (min-width: 48rem) {
    left: inherit;
    right: inherit;
    ${props => (props.isAlignedRight ? 'right: -1.5rem;' : 'left: -1.5rem;')};
  }
`;

class Filter extends Component {
  state = {
    isOpened: false,
  };

  toggle = () => {
    this.setState(
      prevState => ({ isOpened: !prevState.isOpened }),
      () => this.props.onToggle(this.state.isOpened),
    );
  };

  handleOutsideClick = (e) => {
    if (this.node && !this.node.contains(e.target)) {
      this.handleClick();
    }
  };

  handleClick = () => {
    if (this.state.isOpened) {
      document.removeEventListener('click', this.handleOutsideClick, false);
    } else {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
    this.toggle();
  };

  render() {
    return (
      <Wrapper>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Button
            onClick={this.handleClick}
            isOpened={this.state.isOpened}
            isSomeOpened={this.props.isSomeOpened}
          >
            {this.props.title}
          </Button>
          {this.state.isOpened && (
            <Content isAlignedRight={this.props.isAlignedRight}>{this.props.children}</Content>
          )}
        </div>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  isAlignedRight: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  isSomeOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Filter.defaultProps = {
  isAlignedRight: false,
};

export default Filter;
