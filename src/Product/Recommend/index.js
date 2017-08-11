import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Recommend = styled.section`
  padding: 0rem 1rem;

  @media screen and (min-width: 48rem) {
    padding: 0 0.5rem;
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

export default function() {
  return (
    <Recommend>
      <Products>
        <Subheading>We recommend</Subheading>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              title="Emroided Hooded Content For Three Lines"
              price={27000}
              currency="RUB"
              image="img/recommend-1.jpg"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              title="Relaxed Fit Stretch Jeans Content For Three Lines"
              price={22500}
              currency="RUB"
              image="img/recommend-2.jpg"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              title="Leather and House Check Content For Three Lines"
              price={120000}
              currency="RUB"
              image="img/recommend-3.jpg"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              title="Leather Wingtip Check Content For Three Lines"
              price={46000}
              currency="RUB"
              image="img/recommend-4.jpg"
            />
          </div>
        </div>
      </Products>
      <More>
        <Subheading>More for you</Subheading>
        <Link href="#" class="recommend-more-content-item">Men’s Black Trench Coats</Link>
        <Link href="#" class="recommend-more-content-item">Men’s Short Trench Coats</Link>
        <Link href="#" class="recommend-more-content-item">Men’s Long Trench Coats</Link>
      </More>
    </Recommend>
  );
}
