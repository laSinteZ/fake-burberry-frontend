import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import triangle from '../../assets/triangle.svg';

const Container = styled.div`
  padding: 0rem 0.5rem;
  @media screen and (min-width: 48rem) {
    padding: 0rem;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 4rem;
  }
`;

const Text = styled.div`
  margin: 1rem 0 2rem 0;
  display: ${props => (props.active ? 'block' : 'none')};

  @media screen and (min-width: 48rem) {
    margin: 1rem 0rem 0rem 0rem;
    display: block;
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.167;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 1.5rem;
  padding: 0;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.35;
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

    ${props => (props.active ? 'transform: rotate(180deg);' : '')};
  }

  @media screen and (min-width: 48rem) {
    margin: 0rem;
    ::after {
      content: none;
    }
  }

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
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

const Image = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ active: !state.active }));
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Image src="img/shipping.png" alt="Shipping gifts" />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-offset-1 col-lg-4">
            <ButtonWrapper active={this.state.active} onClick={this.toggle}>
              <Button type="button">
                <Title>
                  {this.props.title}
                </Title>
              </Button>
            </ButtonWrapper>
            <Text active={this.state.active}>
              <Subtitle>Free Next Day Delivery</Subtitle>
              <Paragraph>Order before 7pm Monday to Thursday for delivery the next day</Paragraph>
              <Subtitle>Collect-in-Store</Subtitle>
              <Paragraph>
                Order online today and pick up your items in store as early as tomorrow
              </Paragraph>
              <Subtitle>Free Returns</Subtitle>
              <Paragraph>Enjoy free returns on your order</Paragraph>
              <Subtitle>Free Gift Packaging</Subtitle>
              <Paragraph>
                Discover our gift packaging, a gold lined box tied with a coloured ribbon
              </Paragraph>
            </Text>
          </div>
        </div>
      </Container>
    );
  }
}

Shipping.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Shipping;
