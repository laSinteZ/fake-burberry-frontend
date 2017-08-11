import React from "react";
import styled from "styled-components";
import triangle from "../../assets/triangle.svg";

const Shipping = styled.div`
  padding: 0rem 0.5rem;
  @media screen and (min-width: 48rem) {
    padding: 0rem;
  }
`;

const Text = styled.div`
  margin: 1rem 0 2rem 0;

  @media screen and (min-width: 48rem) {
    margin: 1rem 0rem 0rem 0rem;
  }

  h4 {
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 12px;
    font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
    line-height: 1.167;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
    line-height: 1.35;
  }

  p + h4 {
    margin-top: 1.5rem;
  }

`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem 2rem 0rem;
  padding: 0;
  border: 0;
  background: white;

  justify-content: space-between;
  align-items: center;

  &::after {
    width: 10px;
    height: 10px;
    background-image: url(${triangle});
    content: '';

    object-fit: contain;
  }

  @media screen and (min-width: 48rem) {
    margin: 0rem;
    &::after {
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

const Image = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

export default function(props) {
  return (
    <Shipping>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Image
            src="img/shipping.png"
            class="product-shipping-image"
            alt="Shipping gifts"
          />
        </div>
        <div className="col-xs-12 col-md-5">
          <ButtonWrapper>
            <Button type="button">
              <Title>
                {props.title}
              </Title>
            </Button>
          </ButtonWrapper>
          <Text>
            <h4>Free Next Day Delivery</h4>
            <p>Order before 7pm Monday to Thursday for delivery the next day</p>
            <h4>Collect-in-Store</h4>
            <p>
              Order online today and pick up your items in store as early as
              tomorrow
            </p>
            <h4>Free Returns</h4>
            <p>Enjoy free returns on your order</p>
            <h4>Free Gift Packaging</h4>
            <p>
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </p>
          </Text>
        </div>
      </div>
    </Shipping>
  );
}
