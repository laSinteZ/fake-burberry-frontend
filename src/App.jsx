import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header';
import Product from './Product';
import Products from './Products';
import Footer from './Footer';

addLocaleData(ruLocaleData);

/* Let's imagine that this information has come to us form somewhere */
const productTitle = 'Cashmere Trench Coat';
const productImages = [
  {
    id: 1,
    src: 'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat',
  },
  {
    id: 2,
    src: 'https://assets.burberry.com/is/image/Burberryltd/ac883de18f98ce6c630436cc95b594998dcfb5d6.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat Back',
  },
  {
    id: 3,
    src: 'https://assets.burberry.com/is/image/Burberryltd/7c5bb44b566ce3a820cfdc8cacb377065d540e95.jpg?$BBY_V2_SL_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat No Human',
  },
  {
    id: 4,
    src: 'https://assets.burberry.com/is/image/Burberryltd/1e8677ea552b01b2e33caa153088a5c59d25a462.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat Close Look',
  },
];

export default function App() {
  return (
    <IntlProvider locale="ru">
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/men" />
              <Route
                path="/:section/:subsection/:id"
                render={props => <Product {...props} title={productTitle} images={productImages} />}
              />
              <Route exact path="/:section/:subsection" component={Products} />
              <Route exact path="/:section" component={Products} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}
