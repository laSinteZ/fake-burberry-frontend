import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import ButtonColour from './ButtonColour';
import ButtonTextOnly from './ButtonTextOnly';
import ButtonSize from './ButtonSize';
import PriceArticle from './PriceArticle';
import { ToMd, Lg } from '../../common/Breakpoints';

const Divider = styled.hr`
  margin: 2rem 0;
  border: none;
  border-top: solid 1px #c6c6c6;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Colour = styled.p`
  margin: 0;
  margin-bottom: 1rem;

  color: #171717;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.34;
`;

const Size = Colour;

const SizeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  padding: 1rem 0 3rem 0;

  @media screen and (min-width: 48rem) {
    padding: 0;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 4px;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.167;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.35;
`;

const SizeSelect = styled.select`
  width: 100%;
  height: 3rem;
  position: relative;
  display: block;
  margin-bottom: -3rem;
  cursor: pointer;
  color: Transparent;

  opacity: 0;
  border: none;

  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
`;

class InfoPanel extends Component {
  state = {
    selectedColour: 0,
    selectedSize: 0,
  };

  handleSelectColour = (selectedColour) => {
    this.setState({ selectedColour });
  };

  handleSelectSize = (selectedSize) => {
    this.setState({ selectedSize });
  };

  render() {
    return (
      <InfoContainer>
        <PriceArticle id={39428531} price={110000} currency="RUB" />
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Colour>
              Colour: <b>{this.props.colours[this.state.selectedColour].name}</b>
            </Colour>
          </div>
          <Lg>
            <div className="col-lg-6">
              <SizeWrapper>
                <Size>
                  Size: <b>{this.props.sizes[this.state.selectedSize]}</b>
                </Size>
                <ButtonTextOnly type="button">NEED SIZE HELP?</ButtonTextOnly>
              </SizeWrapper>
            </div>
          </Lg>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            {this.props.colours.map((colour, index) => (
              <ButtonColour
                key={colour.value}
                value={colour.value}
                colourName={colour.name}
                isActive={index === this.state.selectedColour}
                onClick={() => {
                  this.handleSelectColour(index);
                }}
              />
            ))}
          </div>
          <Lg>
            <div className="col-lg-6">
              {this.props.sizes.map((size, index) => (
                <ButtonSize
                  key={size}
                  value={size}
                  isActive={index === this.state.selectedSize}
                  onClick={() => {
                    this.handleSelectSize(index);
                  }}
                />
              ))}
            </div>
          </Lg>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Lg>
              <Button primary type="button">
                Add to bag
              </Button>
            </Lg>
            <ToMd>
              <Divider />
              <SizeSelect>
                {this.props.sizes.map((size, index) => (
                  <option
                    key={size}
                    onClick={() => {
                      this.handleSelectSize(index);
                    }}
                  >
                    {size}
                  </option>
                ))}
              </SizeSelect>
              <Button primary type="button">
                Select a size
              </Button>
            </ToMd>
          </div>
          <div className="col-xs-12 col-lg-6">
            <Button type="button">Find in store</Button>
            <ToMd>
              <ButtonTextOnly type="button">NEED SIZE HELP?</ButtonTextOnly>
            </ToMd>
          </div>
        </div>
        <Lg>
          <div className="row">
            <div className="col-lg-12">
              <Subtitle>Free Next Day Delivery</Subtitle>
              <Paragraph>Order before 7pm Monday to Thursday for delivery the next day</Paragraph>
            </div>
          </div>
        </Lg>
      </InfoContainer>
    );
  }
}

InfoPanel.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.object).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoPanel;
