import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Showcase from './Showcase';
import Gallery from './Gallery';
import InfoPanel from './InfoPanel/';
import Recommend from './Recommend';
import Description from './Accordions/Description';
import Shipping from './Accordions/Shipping';
import { ToMd, Lg } from '../common/Breakpoints';

const Title = styled.h1`
  padding: 1rem 0;
  color: #111111;
  font-weight: normal;
  font-size: 20px;
  font-family: Lora, serif;
  line-height: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media screen and (min-width: 62rem) {
    padding: 0;
    margin-bottom: 0.5rem;
  }
`;

const DividerMobile = styled.hr`
  margin: 0 -0.5rem;
  border: none;
  border-top: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Background = styled.div`
  @media screen and (min-width: 62rem) {
    background: #d4bdad;
    margin-bottom: 4rem;
  }
`;

const PrimaryImage = styled.img`
  display: block;
  width: 100%;
`;

const InfoPanelWrapper = styled.section`
  @media screen and (min-width: 62rem) {
    padding: 6rem 0 6rem 0;
  }
`;

const recs = [
  {
    title: 'The Westminster – Long Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
    promoLabel: 'Relaxed fit',
    colours: 3,
    price: 120000,
    currency: 'RUB',
  },
  {
    title: 'The Kensington – Mid-Length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
    promoLabel: 'Classic fit',
    colours: 4,
    price: 110000,
    currency: 'RUB',
  },
  {
    title: 'The Sandringham – Mid-length Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
    promoLabel: 'Tailored fit',
    colours: 3,
    price: 110000,
    currency: 'RUB',
  },
  {
    title: 'The Chelsea – Short Heritage Trench Coat',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
    promoLabel: 'Slim fit',
    colours: 3,
    price: 100000,
    currency: 'RUB',
  },
];

const colours = [
  { name: 'Honey', value: '#cfa880' },
  { name: 'Beige', value: '#f5f5dc' },
  { name: 'Black', value: '#232122' },
];
const sizes = ['S', 'M', 'L', 'XL'];

export default function Product(props) {
  return (
    <main>
      <Helmet>
        <title>{props.title} | Men - Burberry</title>
        <meta
          name="description"
          content={
            'Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.'
          }
        />
        <meta name="keywords" content="Gabardine Coat, Car Coat, Luxury" />
      </Helmet>
      <Background>
        <div className="container">
          <ToMd>
            <Title>{props.title}</Title>
          </ToMd>
          <div className="row middle-lg">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <ToMd>
                <Showcase images={props.images} />
              </ToMd>
              <Lg>
                <PrimaryImage src={props.images[0].src} alt={props.images[0].alt} />
              </Lg>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <InfoPanelWrapper>
                <Lg>
                  <Title>{props.title}</Title>
                </Lg>
                <InfoPanel colours={colours} sizes={sizes} />
              </InfoPanelWrapper>
            </div>
          </div>
        </div>
      </Background>
      <div className="container">
        <DividerMobile />
        <Description title="Description">
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable
            fabric that protects against wind and rain.
          </p>
          <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly
              according to size.
            </li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </Description>
        <Lg>
          <Gallery images={props.images} />
        </Lg>
        <DividerMobile />
        <Shipping title="Delivery" />
        <DividerMobile />
        <Recommend cards={recs} />
      </div>
    </main>
  );
}

Product.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
