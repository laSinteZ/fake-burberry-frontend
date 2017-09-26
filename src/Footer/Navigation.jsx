import React from 'react';
import styled from 'styled-components';
import { Lg } from '../common/Breakpoints';

const Navigation = styled.div`
  display: none;
  margin-bottom: 2rem;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const Subtitle = styled.h3`
  display: block;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.24;
`;

const Link = styled.a`
  display: block;
  color: #999999;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.34;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Shop = styled.img`
  display: block;
  margin: 0;
  width: 100%;
`;

const ShopLink = styled.span`
  display: inline-block;
  margin-top: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #171717;
  text-decoration: none;
  border-bottom: solid 1px #171717;
`;

export default function () {
  return (
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Subtitle>Customer Service</Subtitle>
          <nav>
            <Link href="#">Contact Us</Link>
            <Link href="#">Payment</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Faqs</Link>
            <Link href="#">Live Chat</Link>
            <Link href="#">The Burberry App</Link>
            <Link href="#">Store Locator</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Subtitle>Our Company</Subtitle>
          <nav>
            <Link href="#">Our History</Link>
            <Link href="#">Burberry Group Pic</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Corporate Responsibility</Link>
            <Link href="#">Site Map</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Subtitle>Legal &amp; Cookies</Subtitle>
          <nav>
            <Link href="#">Terms &amp; Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Accessibility Statement</Link>
            <Link href="#">Japan Only - SCTL indications</Link>
          </nav>
        </div>
        <Lg>
          <div className="col-md-3">
            <a href="/">
              <Shop
                alt="Shop image"
                src="https://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=474"
              />
              <ShopLink>Find a store</ShopLink>
            </a>
          </div>
        </Lg>
      </div>
    </Navigation>
  );
}
