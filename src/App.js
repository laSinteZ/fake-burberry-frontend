import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta name="description" content="Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain." />
          <meta name="keywords" content="Gabardine Coat, Car Coat, Luxury" />
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
