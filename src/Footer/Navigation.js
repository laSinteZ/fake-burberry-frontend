import React from "react";
import styled from "styled-components";

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

  & + & {
    margin-top: 0.75rem;    
  }
`;

export default function() {
  return (
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Subtitle>Customer Service</Subtitle>
          <nav>
            <Link href="#" class="footer-navigation-link">Contact Us</Link>
            <Link href="#" class="footer-navigation-link">Payment</Link>
            <Link href="#" class="footer-navigation-link">Shipping</Link>
            <Link href="#" class="footer-navigation-link">Returns</Link>
            <Link href="#" class="footer-navigation-link">Faqs</Link>
            <Link href="#" class="footer-navigation-link">Live Chat</Link>
            <Link href="#" class="footer-navigation-link">The Burberry App</Link>
            <Link href="#" class="footer-navigation-link">Store Locator</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Subtitle>Our Company</Subtitle>
          <nav>
            <Link href="#" class="footer-navigation-link">Our History</Link>
            <Link href="#" class="footer-navigation-link">Burberry Group Pic</Link>
            <Link href="#" class="footer-navigation-link">Careers</Link>
            <Link href="#" class="footer-navigation-link">Corporate Responsibility</Link>
            <Link href="#" class="footer-navigation-link">Site Map</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Subtitle>Legal &amp; Cookies</Subtitle>
          <nav>
            <Link href="#" class="footer-navigation-link">Terms &amp; Conditions</Link>
            <Link href="#" class="footer-navigation-link">Privacy Policy</Link>
            <Link href="#" class="footer-navigation-link">Cookie Policy</Link>
            <Link href="#" class="footer-navigation-link">Accessibility Statement</Link>
            <Link href="#" class="footer-navigation-link">Japan Only - SCTL indications</Link>
          </nav>
        </div>
      </div>
    </Navigation>
  );
}