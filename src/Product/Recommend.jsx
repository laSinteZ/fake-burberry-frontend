import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../common/Card';

const Wrapper = styled.section`
  padding: 0;

  @media screen and (min-width: 48rem) {
    padding-bottom: 1rem;
  }
`;

const Subheading = styled.h2`
  padding-bottom: 1rem;
  color: #171717;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.2;

  @media screen and (min-width: 62rem) {
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const Products = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const More = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  margin: 0;
  color: #171717;
  text-decoration: none;
  font-style: italic;
  font-size: 14px;
  font-family: Lora, serif;
  line-height: 1.215;

  & + & {
    margin-top: 1rem;
  }
`;

export default function Recommend(props) {
  const allCards = props.cards.map(card =>
    (<div className="col-xs-6 col-md-3" key={card.image.toString()}>
      <Card
        link="/men/clothing/test"
        title={card.title}
        price={card.price}
        currency={card.currency}
        image={card.image}
        colours={card.colours}
        promoLabel={card.promoLabel}
      />
    </div>),
  );

  return (
    <Wrapper>
      <Products>
        <Subheading>We recommend</Subheading>
        <div className="row">
          {allCards}
        </div>
      </Products>
      <More>
        <Subheading>More for you</Subheading>
        <Link href="#">Men’s Black Trench Coats</Link>
        <Link href="#">Men’s Short Trench Coats</Link>
        <Link href="#">Men’s Long Trench Coats</Link>
      </More>
    </Wrapper>
  );
}

Recommend.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
