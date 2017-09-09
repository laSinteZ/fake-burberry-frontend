import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header';
import Product from './Product';
import Products from './Products';
import Footer from './Footer';
import SideMenu from './SideMenu';

addLocaleData(ruLocaleData);

/* Let's imagine that this information has come to us form somewhere */
const productTitle = 'Cashmere Trench Coat';
const productImages = [
  {
    id: 1,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat',
  },
  {
    id: 2,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/ac883de18f98ce6c630436cc95b594998dcfb5d6.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat Back',
  },
  {
    id: 3,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/7c5bb44b566ce3a820cfdc8cacb377065d540e95.jpg?$BBY_V2_SL_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat No Human',
  },
  {
    id: 4,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/1e8677ea552b01b2e33caa153088a5c59d25a462.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    alt: 'Cashmere Trench Coat Close Look',
  },
];

const Wrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  ${props =>
    props.isSideMenuOpened &&
    css`
      overflow: hidden;
      transform: translate3d(274px, 0, 0);
      @media screen and (min-width: 48rem) {
        transform: none;
      }
    `};
  background: #ffffff;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

class App extends Component {
  state = {
    isSideMenuOpened: false,
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({
      isSideMenuOpened: !prevState.isSideMenuOpened,
    }));
  };

  render() {
    return (
      <IntlProvider locale="ru">
        <BrowserRouter>
          <Wrapper>
            <SideMenu handleSideMenuClick={this.toggleSideMenu} />
            <Page isSideMenuOpened={this.state.isSideMenuOpened}>
              {this.state.isSideMenuOpened && <Overlay onClick={this.toggleSideMenu} />}
              <Header onSideMenuClick={this.toggleSideMenu} />
              <Switch>
                <Redirect exact from="/" to="/men" />
                <Route
                  path="/:section/:subsection/:id"
                  render={props => (
                    <Product {...props} title={productTitle} images={productImages} />
                  )}
                />
                <Route exact path="/:section/:subsection" component={Products} />
                <Route exact path="/:section" component={Products} />
              </Switch>
              <Footer />
            </Page>
          </Wrapper>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
