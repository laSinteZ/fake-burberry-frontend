import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Group from './Group';
import More from './More';

const coats = {
  title: 'Heritage Trench Coats',
  cards: [
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1395,
      promoLabel: 'Relaxed fit',
      colours: 1,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/product-1.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1295,
      promoLabel: 'Classic fit',
      colours: 1,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/product-2.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1295,
      promoLabel: 'Tailored fit',
      colours: 1,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/product-3.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1195,
      promoLabel: 'Slim fit',
      colours: 3,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/product-4.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1395,
      promoLabel: 'Relaxed fit',
      colours: 3,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/recommend-1.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1395,
      promoLabel: 'Classic fit',
      colours: 4,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/recommend-2.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1195,
      promoLabel: 'Tailored fit',
      colours: 3,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/recommend-3.jpg`,
    },
    {
      title: 'The Westminster – Long Heritage Trench Coat',
      price: 1395,
      promoLabel: 'Slim fit',
      colours: 3,
      currency: 'GBP',
      image: `${process.env.PUBLIC_URL}/img/recommend-4.jpg`,
    },
  ],
};

export default function Products() {
  return (
    <main>
      <Helmet>
        <title>
          Men - Burberry
        </title>
        <meta
          name="description"
          content={
            'All types of coats, here adn now'
          }
        />
        <meta name="keywords" content="Man Coats, Man" />
      </Helmet>
      <Header />
      <div className="container">
        <Group title={coats.title} cards={coats.cards} />
        <Group title={coats.title} cards={coats.cards} />
        <More />
      </div>
    </main>
  );
}
