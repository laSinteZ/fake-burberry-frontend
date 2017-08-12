import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
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
  return (
    <div className="row">
      <GalleryContainer>
        <div className="col-lg-4">
          <Image src={props.images[1].src} alt={props.images[1].alt} />
        </div>
        <div className="col-lg-4">
          <Image src={props.images[2].src} alt={props.images[2].alt} />
        </div>
        <div className="col-lg-4">
          <Image src={props.images[3].src} alt={props.images[3].alt} />
        </div>
      </GalleryContainer>
    </div>
  );
}
