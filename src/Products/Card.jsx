import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import Heart from '../common/Icons/Heart';

const Wrapper = styled.div`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  margin: 0;
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: #171717;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;
  font-weight: 600;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-right: 1.875rem;
  }

  @media screen and (min-width: 62rem) {
    font-size: 1rem;
  }
`;

const RouteLink = styled(Link)`
  text-decoration: none;
  color: #171717;
`;

const Price = styled.h5`
  color: #171717;
  font-weight: normal;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;

  @media screen and (min-width: 62rem) {
    font-size: 12px;
    line-height: 1rem;
    color: #171717;
  }
`;

const Colours = styled.h5`
  display: inline-block;
  font-weight: normal;
  line-height: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  text-align: left;
  color: #171717;
  margin-bottom: 4px;
`;

const ColoursNumber = styled(Link)`
border-bottom: 1px solid black;
text-decoration: none;
color: #171717;
`;

const Promo = styled.div`
  margin: 1rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PromoLabel = styled.p`
  line-height: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  color: #171717;
  margin: 0;
`;

const Like = styled.button`
  padding: 0;
  border: none;
  background: Transparent;
  cursor: pointer;
`;

const colourMessage = '{colourNumber, number} {colourNumber, plural, one {colour} other {colours}}';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  handleLike = () => {
    this.setState(state => ({
      isLiked: !state.isLiked,
    }));
  }

  render() {
    return (
      <Wrapper>
        <RouteLink to={this.props.to}>
          <Image alt={this.props.title} src={this.props.image} />
        </RouteLink>
        <Promo>
          <PromoLabel>
            {this.props.promoLabel}
          </PromoLabel>
          <Like onClick={this.handleLike}>
            <Heart fill={this.state.isLiked ? '#171717' : 'none'} />
          </Like>
        </Promo>
        <RouteLink to={this.props.to}>
          <Title>
            {this.props.title}
          </Title>
        </RouteLink>
        <Colours>
          Available in{' '}
          <ColoursNumber to={this.props.to}>
            <FormattedMessage
              id="colour"
              defaultMessage={colourMessage}
              values={{
                colourNumber: this.props.colours,
              }}
            />
          </ColoursNumber>
        </Colours>
        <Price>
          <FormattedNumber
            value={this.props.price}
            style="currency" // eslint-disable-line
            currency={this.props.currency}
            currencyDisplay="symbol"
            minimumFractionDigits={0}
          />
        </Price>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colours: PropTypes.number.isRequired,
  promoLabel: PropTypes.string.isRequired,
};

export default Card;
