import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;

  > div:nth-child(1) {
    margin-top: 6rem;
  }
  > div:nth-child(2) {
    margin-top: 10rem;
  }
  > div:nth-child(3) {
    margin-top: 4rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export default function Gallery(props) {
  const allImages = props.images.slice(1, 4).map(img =>
    (<div className="col-lg-4" key={img.src.toString()}>
      <Image src={img.src} alt={img.alt} />
    </div>),
  );

  return (
    <div className="row">
      <Container>
        {allImages}
      </Container>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
