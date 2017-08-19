import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter, Route } from 'react-router-dom';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header';
import Product from './Product';
import Products from './Products';
import Footer from './Footer';

addLocaleData(ruLocaleData);

/* Let's imagine that this information has come to us form somewhere */
const productTitle = 'Long Cotton Gabardine Car Coat Coat Coat Coat Coat';
const productImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/img/product-1.jpg`, alt: 'Long Cotton Gabardine Car Coat' },
  { id: 2, src: `${process.env.PUBLIC_URL}/img/product-2.jpg`, alt: 'Long Cotton Gabardine Car Coat' },
  { id: 3, src: `${process.env.PUBLIC_URL}/img/product-3.jpg`, alt: 'Long Cotton Gabardine Car Coat' },
  { id: 4, src: `${process.env.PUBLIC_URL}/img/product-4.jpg`, alt: 'Long Cotton Gabardine Car Coat' },
];

export default function App() {
  return (
    <IntlProvider locale="ru">
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Products} />
            <Route exact path="/:section/:subsection" component={Products} />
            <Route exact path="/:section/" component={Products} />
            <Route
              path="/:section/:subsection/:id"
              render={props => <Product {...props} title={productTitle} images={productImages} />}
            />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}
