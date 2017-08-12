import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import { IntlProvider, addLocaleData } from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";

addLocaleData(ruLocaleData);

export default function App() {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta
            name="description"
            content="Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain."
          />
          <meta name="keywords" content="Gabardine Coat, Car Coat, Luxury" />
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
}
