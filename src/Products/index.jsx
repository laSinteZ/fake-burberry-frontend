import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Group from './Group';
import More from './More';

const Overlay = styled.div`
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: #000000;
    ${props => props.isVisible && css`content: '';`};
  }
`;

const coats = {
  title: 'Heritage Trench Coats',
  cards: [
    {
      title: 'The Westminster – Long Heritage Trench Fun Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
      promoLabel: 'Relaxed fit',
      colours: 3,
      price: 1195,
      currency: 'GBP',
    },
    {
      title: 'The Kensington – Mid-Length Heritage Trench Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
      promoLabel: 'Classic fit',
      colours: 4,
      price: 1255,
      currency: 'GBP',
    },
    {
      title: 'The Sandringham – Mid-length Heritage Trench Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
      promoLabel: 'Tailored fit',
      colours: 3,
      price: 1355,
      currency: 'GBP',
    },
    {
      title: 'The Chelsea – Short Heritage Trench SuperFun Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303&hei=404',
      promoLabel: 'Slim fit',
      colours: 3,
      price: 1125,
      currency: 'GBP',
    },
    {
      title: 'The Westminster – Long Heritage Trench Fun Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303',
      promoLabel: 'Relaxed fit',
      colours: 3,
      price: 1195,
      currency: 'GBP',
    },
    {
      title: 'The Kensington – Mid-Length Heritage Trench Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303',
      promoLabel: 'Classic fit',
      colours: 4,
      price: 1255,
      currency: 'GBP',
    },
    {
      title: 'The Sandringham – Mid-length Heritage Trench Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303',
      promoLabel: 'Tailored fit',
      colours: 3,
      price: 1355,
      currency: 'GBP',
    },
    {
      title: 'The Chelsea – Short Heritage Fun Super Trench Coat',
      image:
        'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303',
      promoLabel: 'Slim fit',
      colours: 3,
      price: 1125,
      currency: 'GBP',
    },
  ],
};

class List extends Component {
  state = {
    isOverlayVisible: false,
  };

  setOverlayVisible = (isOverlayVisible) => {
    this.setState({ isOverlayVisible });
  };

  render() {
    return (
      <main>
        <Helmet>
          <title>Men - Burberry</title>
          <meta name="description" content={'All types of coats, here adn now'} />
          <meta name="keywords" content="Man Coats, Man" />
        </Helmet>
        <Header onToggle={this.setOverlayVisible} />
        <Overlay isVisible={this.state.isOverlayVisible}>
          <div className="container">
            <Group title={coats.title} cards={coats.cards} />
            <Group title={coats.title} cards={coats.cards} />
            <More />
          </div>
        </Overlay>
      </main>
    );
  }
}

export default List;
