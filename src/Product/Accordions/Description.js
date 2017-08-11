import React, { Component } from "react";
import styled from "styled-components";
import triangle from "../../assets/triangle.svg";

const Container = styled.div`
  padding: 0rem 0.5rem;
  @media screen and (min-width: 48rem) {
    padding: 0rem;
  }
`;

const Text = styled.div`
  display: ${props => (props.active ? `block` : "none")};
  margin-bottom: 2rem;
  padding: 0;
  color: #171717;
  font-size: 14px;
  font-family: Lora, serif;
  line-height: 1.75;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    margin-bottom: 3rem;
    padding: 0;
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem;
  padding: 0;
  border: 0;
  background: white;

  justify-content: space-between;
  align-items: center;

  ::after {
    width: 10px;
    height: 10px;
    background-image: url(${triangle});
    content: '';

    object-fit: contain;

    ${props => (props.active ? "transform: rotate(180deg);" : "")};
  }

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0 0 0;
    ::after {
      content: none;
    }
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: white;
`;

const Title = styled.h2`
  color: #171717;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 20px;
`;

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state, props) => ({ active: !state.active }));
  }

  render() {
    return (
      <Container>
        <ButtonWrapper active={this.state.active} onClick={this.toggle}>
          <Button type="button">
            <Title>
              {this.props.title}
            </Title>
          </Button>
        </ButtonWrapper>
        <Text active={this.state.active}>
          {this.props.children}
        </Text>
      </Container>
    );
  }
}

export default Description;
