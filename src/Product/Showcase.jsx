import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 -0.5rem;
  white-space: nowrap;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Image = styled.img`
  height: 400px;
  object-fit: contain;

  @media screen and (min-width: 48rem) {
    height: 576px;
    object-fit: cover;
  }
`;

export default function Showcase(props) {
  return (
    <Container>
      {props.images.map(img => <Image src={img.src} alt={img.alt} key={img.src.toString()} />)}
    </Container>
  );
}

Showcase.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
